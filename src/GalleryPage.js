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
    id: 11,
    title: "Customer Yule Log",
    category: "Yule Workshop",
    image: "/images/burning-log.jpg",
  },
  {
    id: 12,
    title: "Customer Yule Arrangement",
    category: "Yule Workshop",
    image: "/images/christmas.jpg",
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
  {
    id: 21,
    title: "Valentines Altar Arrangement",
    category: "Altar Inspiration",
    image: "/images/budda.jpg",
  },
  {
    id: 22,
    title: "Self-Love Bath Salts",
    category: "Loving Magically Workshop",
    image: "/images/crafting.jpg",
  },
  {
    id: 23,
    title: "Crystal Douser",
    category: "Intuition and Divination Workshop",
    image: "/images/douser.jpg",
  },
  {
    id: 24,
    title: "Drum Circle Workshop",
    category: "Summer Drummer Workshop",
    image: "/images/drum-circle.jpg",
  },
  {
    id: 25,
    title: "Drum Circle Workshop",
    category: "Summer Drummer Workshop",
    image: "/images/drum-circle2.jpg",
  },
  {
    id: 26,
    title: "Drum Circle Workshop",
    category: "Summer Drummer Workshop",
    image: "/images/drums.jpg",
  },
  {
    id: 27,
    title: "Yule Log Creative Process",
    category: "Yule Workshop",
    image: "/images/fiddly-work.jpg",
  },
  {
    id: 28,
    title: "Yule Table Arrangement",
    category: "Yule Workshop",
    image: "/images/finished-decoration.jpg",
  },
  {
    id: 29,
    title: "Sacred Circle",
    category: "Summer Drummer Workshop",
    image: "/images/firepit.jpg",
  },
  {
    id: 30,
    title: "Flower Arranging",
    category: "Yule Workshop",
    image: "/images/flower-arranging.jpg",
  },
  {
    id: 31,
    title: "Flowers",
    category: "Loving Magically Workshop",
    image: "/images/flowers.jpg",
  },
  {
    id: 33,
    title: "Always a Smiley Face",
    category: "About Me",
    image: "/images/happy-lou.jpg",
  },
  {
    id: 34,
    title: "Teaching",
    category: "About Me",
    image: "/images/learning.jpg",
  },
  {
    id: 35,
    title: "Yule Log",
    category: "Yule Workshop",
    image: "/images/log.jpg",
  },

  {
    id: 37,
    title: "Drumming Lessons",
    category: "Summer Drummer Workshop",
    image: "/images/lou-drumming.jpg",
  },
  {
    id: 38,
    title: "Nature is medicine",
    category: "About Me",
    image: "/images/lou-field.jpg",
  },
  {
    id: 39,
    title: "Louise Schenk-Cooper",
    category: "About Me",
    image: "/images/lou-groovy.jpg",
  },

  {
    id: 41,
    title: "Wheel of the Year Craft",
    category: "Wheel of the Year Workshop",
    image: "/images/making-things.jpg",
  },
  {
    id: 42,
    title: "Witches Runes Craft",
    category: "Intuition and Divination Workshop",
    image: "/images/notebook.jpg",
  },
  {
    id: 43,
    title: "Ostara Celebration",
    category: "Altar Inspiration",
    image: "/images/ostara.jpg",
  },
  {
    id: 44,
    title: "Bluebell Forest",
    category: "About Me",
    image: "/images/portrait.jpg",
  },
  {
    id: 45,
    title: "Happiest when Sharing Creativity and Knowledge",
    category: "About Me",
    image: "/images/pretty.jpg",
  },
  {
    id: 46,
    title: "Self-Love Altar",
    category: "Altar Inspiration",
    image: "/images/promo.jpg",
  },
  {
    id: 47,
    title: "Reiki Poster",
    category: "Reiki",
    image: "/images/reiki-poster.png",
  },
  {
    id: 48,
    title: "Roaming",
    category: "About Me",
    image: "/images/roaming.jpg",
  },
  {
    id: 49,
    title: "Sally, our Resident Florist",
    category: "Yule Workshop",
    image: "/images/sally.jpg",
  },
  {
    id: 50,
    title: "Happy Customer",
    category: "Loving Magically Workshop",
    image: "/images/salt-bath.jpg",
  },
  {
    id: 51,
    title: "Yule Star Decoration",
    category: "Altar Inspiration",
    image: "/images/star-dec.jpg",
  },
  {
    id: 52,
    title: "Star Decorations",
    category: "Yule Workshop",
    image: "/images/star-decorations.jpg",
  },
  {
    id: 53,
    title: "Table Decoration",
    category: "Yule Workshop",
    image: "/images/table-decoration.jpg",
  },
  {
    id: 54,
    title: "Decorated Table",
    category: "Yule Workshop",
    image: "/images/table.jpg",
  },
  {
    id: 55,
    title: "Tree Hugger",
    category: "About Me",
    image: "/images/tree-hugger.jpg",
  },
  {
    id: 56,
    title: "Tree",
    category: "Altar Inspiration",
    image: "/images/tree.jpg",
  },
  {
    id: 57,
    title: "Winter Decoration",
    category: "Yule Workshop",
    image: "/images/winter-decoration.jpg",
  },
  {
    id: 58,
    title: "Workshop Fun",
    category: "Intuition and Divination Workshop",
    image: "/images/workshop-fun.jpg",
  },
  {
    id: 59,
    title: "Divination Learning",
    category: "Intuition and Divination Workshop",
    image: "/images/workshop.jpg",
  },
  {
    id: 60,
    title: "Workshop Session",
    category: "Wheel of the Year Workshop",
    image: "/images/workshop2.jpg",
  },
  {
    id: 61,
    title: "Workshop Session",
    category: "Wheel of the Year Workshop",
    image: "/images/workshop3.jpg",
  },
  {
    id: 62,
    title: "Workshop Session",
    category: "Wheel of the Year Workshop",
    image: "/images/workshop4.jpg",
  },
  {
    id: 63,
    title: "Workshop Session",
    category: "Wheel of the Year Workshop",
    image: "/images/workshop5.jpg",
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
