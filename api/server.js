import express from "express";
import cors from "cors";
import { resources } from "./resources.js";

const app = express();

app.use(cors());

app.get("/resources", (req, res) => {
  res.json(resources);
});

app.get("/resources/search", (req, res) => {
  const { type, element, intent, q } = req.query;

  let results = resources;

  if (type && type !== "All") {
    results = results.filter((item) => item.type === type);
  }

  if (element && element !== "All") {
    results = results.filter((item) => {
      const elementValue = item.associations?.element;
      return (
        elementValue === element ||
        (Array.isArray(elementValue) && elementValue.includes(element))
      );
    });
  }

  if (intent && intent !== "All") {
    results = results.filter((item) => item.filterTags?.includes(intent));
  }

  if (q && q.trim()) {
    const search = q.trim().toLowerCase();

    results = results.filter((item) => {
      const haystack = [
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

      return haystack.includes(search);
    });
  }

  res.json(results);
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000/resources");
});
