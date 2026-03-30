import React, { useMemo, useState } from "react";
import Layout from "./Layout";
import "./GalleryPage.css";

const galleryItems = [
  {
    id: 1,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement.jpg",
  },
  {
    id: 2,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement2.jpg",
  },
  {
    id: 3,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement3.jpg",
  },
  {
    id: 4,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement4.jpg",
  },
  {
    id: 5,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement5.jpg",
  },
  {
    id: 6,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement6.jpg",
  },
  {
    id: 7,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement7.jpg",
  },
  {
    id: 8,
    title: "Customer Floral Arrangement",
    category: "Yule Workshop",
    image: "/images/achievement8.jpg",
  },
  {
    id: 9,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar.jpg",
  },
  {
    id: 10,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar2.jpg",
  },

  {
    id: 13,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar5.jpg",
  },
  {
    id: 14,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar6.jpg",
  },
  {
    id: 15,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar7.jpg",
  },
  {
    id: 16,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar8.jpg",
  },

  {
    id: 18,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar10.jpg",
  },
  {
    id: 19,
    title: "Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/altar11.jpg",
  },
  {
    id: 20,
    title: "Chinese Baoding balls",
    category: "Meditation Tools",
    image: "/images/balls.jpg",
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
