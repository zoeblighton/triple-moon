import { useMemo, useState } from "react";
import Layout from "./Layout";
import { resources } from "./data/Resources";
import "./Resources.css";

function firstLetter(name = "") {
  const c = name.trim().charAt(0).toUpperCase();
  return c >= "A" && c <= "Z" ? c : "#";
}

export default function Resources() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [elementFilter, setElementFilter] = useState("All");
  const [intentFilter, setIntentFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return resources.filter((item) => {
      const typeOk = typeFilter === "All" || item.type === typeFilter;

      const elementValue = item.associations?.element;
      const elementOk =
        elementFilter === "All" ||
        elementValue === elementFilter ||
        (Array.isArray(elementValue) && elementValue.includes(elementFilter));

      const intentOk =
        intentFilter === "All" ||
        (item.keywords || [])
          .map((k) => k.toLowerCase())
          .includes(intentFilter.toLowerCase());

      if (!typeOk || !elementOk || !intentOk) return false;

      if (!q) return true;

      const hay = [
        item.name,
        item.type,
        ...(item.alsoKnownAs || []),
        ...(item.keywords || []),
        item.summary,
        ...(item.uses || []),
        ...(item.cautions || []),
        item.associations?.sabbat,
        item.associations?.deity,
        item.associations?.planet,
        item.associations?.magic,
      ]
        .flat()
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return hay.includes(q);
    });
  }, [query, typeFilter, elementFilter, intentFilter]);

  const grouped = useMemo(() => {
    const map = new Map();

    for (const item of filtered) {
      const letter = firstLetter(item.name);
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter).push(item);
    }

    const letters = Array.from(map.keys()).sort((a, b) => a.localeCompare(b));

    for (const l of letters) {
      map.get(l).sort((a, b) => a.name.localeCompare(b.name));
    }

    return { map, letters };
  }, [filtered]);

  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <Layout>
      <section className="section">
        <div className="sectionHeader">
          <h2>Resources</h2>
          <h3 className="muted">
            {" "}
            A collection of magical resources, organised A–Z. Use filters or
            search to explore.{" "}
          </h3>
          <p className="muted">
            This space is a growing collection of magical resources I’ve
            gathered over time — herbs, plants, roots, resins, minerals, and
            more. Everything here is organised alphabetically to make browsing
            easy, but you can also filter by intention or element, or simply
            search for what you’re drawn to. Use it as a reference, a starting
            point, or a quiet place to explore and reconnect with your practice.
          </p>
        </div>

        <div className="filters">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Herb">Herb</option>
            <option value="Tree">Tree</option>
            <option value="Root">Root</option>
            <option value="Flower">Flower</option>
            <option value="Resin">Resin</option>
            <option value="Crystal">Crystal</option>
          </select>

          <select
            value={elementFilter}
            onChange={(e) => setElementFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Air">Air</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Earth">Earth</option>
          </select>

          <select
            value={intentFilter}
            onChange={(e) => setIntentFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="love">Love</option>
            <option value="protection">Protection</option>
            <option value="money">Money</option>
            <option value="healing">Healing</option>
            <option value="psychic">Psychic</option>
          </select>
        </div>

        <div className="resourcesToolbar">
          <input
            className="resourcesSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search (e.g. lavender, protection, sleep)…"
            aria-label="Search resources"
          />

          <div className="resourcesAZ" aria-label="A to Z navigation">
            {allLetters.map((l) => {
              const disabled = !grouped.map.has(l);
              return (
                <a
                  key={l}
                  href={disabled ? undefined : `#letter-${l}`}
                  className={`azLink ${disabled ? "isDisabled" : ""}`}
                  onClick={(e) => disabled && e.preventDefault()}
                >
                  {l}
                </a>
              );
            })}
          </div>
        </div>

        {grouped.letters.length === 0 ? (
          <p className="muted">No matches found.</p>
        ) : (
          grouped.letters.map((letter) => (
            <div key={letter} className="resourcesLetterBlock">
              <h3 id={`letter-${letter}`} className="resourcesLetter">
                {letter}
              </h3>

              <div className="grid">
                {grouped.map.get(letter).map((item) => (
                  <article key={`${item.type}-${item.name}`} className="card">
                    <div className="resourceMeta">
                      <span className="pill">{item.type}</span>
                    </div>

                    <h3>{item.name}</h3>

                    {item.alsoKnownAs?.length ? (
                      <p className="muted" style={{ marginTop: 0 }}>
                        {item.alsoKnownAs.join(", ")}
                      </p>
                    ) : null}

                    {item.summary ? <p>{item.summary}</p> : null}

                    {item.uses?.length ? (
                      <>
                        <h4 className="resourceSubhead">
                          Ways to work with it
                        </h4>
                        <ul className="bullets">
                          {item.uses.map((u) => (
                            <li key={u}>{u}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}

                    {item.cautions?.length ? (
                      <>
                        <h4 className="resourceSubhead">Cautions</h4>
                        <ul className="bullets">
                          {item.cautions.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}

                    {item.keywords?.length ? (
                      <p className="muted resourceTags">
                        {item.keywords.map((k) => `#${k}`).join(" ")}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </Layout>
  );
}
