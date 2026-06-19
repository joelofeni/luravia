"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    title: "Luravia Classic Watch",
    category: "Accessories",
    price: 249,
    badge: "New",
    image: "/images/watch.png",
  },
  {
    id: 2,
    title: "Premium Leather Bag",
    category: "Bags",
    price: 189,
    badge: "Popular",
    image: "/images/bag.png",
  },
  {
    id: 3,
    title: "Modern Sneakers",
    category: "Shoes",
    price: 129,
    badge: "Sale",
    image: "/images/shoe.png",
  },
  {
    id: 4,
    title: "Minimal Headphones",
    category: "Audio",
    price: 299,
    badge: "Featured",
    image: "/images/headphone.png",
  },
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <main className="shop-page">
      {/* HERO */}

      <section className="shop-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="shop-label">Curated Collection</span>

            <h1 className="shop-title">Explore Premium Products</h1>

            <p className="shop-desc">
              Crafted selections designed with quality, elegance and modern
              living in mind.
            </p>

            <div className="shop-actions">
              <input placeholder="Search products..." className="shop-search" />

              <button className="btn btn-primary">Search</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}

      <section className="shop-filters container">
        {["All", "Accessories", "Shoes", "Bags", "Audio"].map((cat) => (
          <button key={cat} className="filter-btn">
            {cat}
          </button>
        ))}
      </section>

      {/* PRODUCTS */}

      <section className="products-section">
        <div className="container">
          <div className="product-grid">
            {products.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="product-card"
              >
                <div className="product-media">
                  <span className="product-badge">{p.badge}</span>

                  <Image
                    src={p.image}
                    alt={p.title}
                    width={300}
                    height={300}
                    className="product-image"
                    loading="eager"
                  />
                </div>

                <div className="product-body">
                  <span className="product-category">{p.category}</span>

                  <h3 className="product-title">{p.title}</h3>

                  <div className="product-footer">
                    <span className="product-price">${p.price}</span>

                    <button
                      className="product-action"
                      onClick={() =>
                        addToCart({
                          id: p.id,
                          title: p.title,
                          price: p.price,
                          image: p.image,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
