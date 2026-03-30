import React, { useMemo, useState } from "react";
import Layout from "./Layout";
import "./GalleryPage.css";

const galleryItems = [
  {
    id: 1,
    title: "Moon Ritual",
    category: "Rituals",
    image: "/images/gallery/moon-ritual.jpg",
  },
  {
    id: 2,
    title: "Sacred Altar",
    category: "Altars",
    image: "/images/gallery/sacred-altar.jpg",
  },
  {
    id: 3,
    title: "Crystal Energy",
    category: "Crystals",
    image: "/images/gallery/crystal-energy.jpg",
  },
  {
    id: 4,
    title: "Candle Magic",
    category: "Rituals",
    image: "/images/gallery/candle-magic.jpg",
  },
  {
    id: 5,
    title: "Herbal Spellwork",
    category: "Herbs",
    image: "/images/gallery/herbal-spellwork.jpg",
  },
  {
    id: 6,
    title: "Triple Moon Symbol",
    category: "Symbols",
    image: "/images/gallery/triple-moon-symbol.jpg",
  },
  {
    id: 7,
    title: "Lunar Offering",
    category: "Altars",
    image: "/images/gallery/lunar-offering.jpg",
  },
  {
    id: 8,
    title: "Amethyst Glow",
    category: "Crystals",
    image: "/images/gallery/amethyst-glow.jpg",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = useMemo(() => {
    const unique = [...new Set(galleryItems.map((item) => item.category))];
    return ["All", ...unique];
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      <div className="galleryPage">
        <header className="galleryPageHeader">
          <p className="galleryPageEyebrow">Triple Moon</p>
          <h1 className="galleryPageTitle">Gallery</h1>
          <p className="galleryPageSubtitle">
            Explore ritual moments, sacred spaces, crystals, symbols, and lunar
            inspiration.
          </p>
        </header>

        <div className="galleryFilterWrap">
          {categories.map((category) => {
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                className={`galleryFilterButton ${
                  active ? "galleryFilterButtonActive" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <section className="galleryPageGrid">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="galleryCard"
              onClick={() => setSelectedImage(item)}
              aria-label={`Open ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="galleryCardImage"
              />
              <div className="galleryCardContent">
                <span className="galleryCardCategory">{item.category}</span>
                <h2 className="galleryCardTitle">{item.title}</h2>
              </div>
            </button>
          ))}
        </section>

        {selectedImage && (
          <div
            className="galleryLightbox"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="galleryLightboxContent"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="galleryLightboxClose"
                aria-label="Close image"
              >
                ×
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="galleryLightboxImage"
              />

              <div className="galleryLightboxText">
                <span className="galleryCardCategory">
                  {selectedImage.category}
                </span>
                <h3 className="galleryLightboxTitle">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
