"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Accessories",
    tag: "Luxury Collection",
    image: "/images/accessories.png",
  },
  {
    id: 2,
    title: "Footwear",
    tag: "Modern Essentials",
    image: "/images/shoes.png",
  },
  {
    id: 3,
    title: "Bags",
    tag: "Premium Design",
    image: "/images/bags.png",
  },
  {
    id: 4,
    title: "Audio",
    tag: "Immersive Sound",
    image: "/images/audio.png",
  },
  {
    id: 5,
    title: "Watches",
    tag: "Timeless Pieces",
    image: "/images/watches.png",
  },
  {
    id: 6,
    title: "Lifestyle",
    tag: "Daily Luxury",
    image: "/images/lifestyle.png",
  },
];

export default function Categories() {
  return (
    <main className="categories-page">
      {/* HERO */}

      <section className="categories-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="categories-label">Explore Collections</span>

            <h1 className="categories-title">Discover by Category</h1>

            <p className="categories-desc">
              Carefully organized collections designed to help you find exactly
              what matches your style and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}

      <section className="categories-section">
        <div className="container">
          <div className="category-grid">
            {categories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <Link href="/demo" className="category-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="category-image"
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    loading="eager"
                  />

                  <div className="category-overlay" />

                  <div className="category-content">
                    <span className="category-tag">{item.tag}</span>

                    <h2 className="category-title">{item.title}</h2>

                    <span className="category-link">Explore →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
