"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  BadgeCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const isAdmin = true;

export default function HomePage() {
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: 1,
      title: "Noir Leather Carry Tote",
      category: "Tote Bag",
      price: 180,
      image: "/images/hero-bag.png",
      alt: "Leather Tote",
      badge: "New",
    },
    {
      id: 2,
      title: "Emerald Structured Bag",
      category: "Handbag",
      price: 220,
      image: "/images/green-bag.png",
      alt: "Structured Handbag",
    },
    {
      id: 3,
      title: "Midnight Artisan Tote",
      category: "Premium",
      price: 260,
      image: "/images/brown-bag.png",
      alt: "Premium Tote",
      badge: "Limited",
      badgeClass: "product-badge-alt",
    },
  ];

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
        </div>

        <div className="container hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Eco-friendly & Handcrafted</span>
            </div>

            <h1 className="hero-title">
              Discover Beautiful
              <span>Handcrafted Bags</span>
              Made to Last.
            </h1>

            <p className="hero-desc">
              Luravia curates premium handmade bags, sustainably crafted with
              precision. Shop exclusive collections designed for style,
              durability, and the planet.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">
                Shop Now
                <ArrowRight size={16} />
              </Link>

              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>

              {isAdmin && (
                <Link href="/demo" className="btn btn-outline-accent">
                  Admin Panel
                </Link>
              )}
            </div>

            <div className="hero-features">
              <div>
                <strong>Sustainable</strong>
                <span>Eco-conscious materials</span>
              </div>

              <div>
                <strong>Premium Quality</strong>
                <span>Crafted with precision</span>
              </div>

              <div>
                <strong>Made with Care</strong>
                <span>Passion in every detail</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-preview"
          >
            <div className="hero-card">
              <Image
                src="/images/sample-bag.png"
                width={800}
                height={800}
                alt="Featured Bag"
                className="hero-image"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>

            <motion.div
              initial={{ y: -6 }}
              animate={{ y: 6 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2.5,
              }}
              className="hero-floating"
            >
              <ShieldCheck size={16} />
              <span>Premium Quality</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Featured Collection</span>
              <h2 className="section-title">Crafted for Everyday Luxury</h2>
            </div>

            <Link href="/products" className="section-link">
              View All →
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-media">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={600}
                    height={600}
                    className="product-image"
                    style={{ width: "auto", height: "auto" }}
                    priority={product.id === 2}
                    loading={product.id === 2 ? "eager" : "lazy"}
                  />

                  {product.badge && (
                    <span
                      className={`product-badge ${product.badgeClass || ""}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="product-body">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>

                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>

                    <button
                      className="product-action"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <Truck size={22} />
              <div>
                <strong>Free Shipping</strong>
                <span>On orders over $100</span>
              </div>
            </div>

            <div className="trust-item">
              <BadgeCheck size={22} />
              <div>
                <strong>Secure Payments</strong>
                <span>100% protected checkout</span>
              </div>
            </div>

            <div className="trust-item">
              <RotateCcw size={22} />
              <div>
                <strong>Easy Returns</strong>
                <span>30-day guarantee</span>
              </div>
            </div>

            <div className="trust-item">
              <Headphones size={22} />
              <div>
                <strong>24/7 Support</strong>
                <span>We&apos;re here to help</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Shop by Category</span>
              <h2 className="section-title">
                Explore Our Signature Collections
              </h2>
            </div>
          </div>

          <div className="category-grid">
            <Link href="/categories" className="category-card">
              <div className="category-overlay" />
              <Image
                src="/images/hero-bag-1.png"
                alt="Tote Bags"
                loading="eager"
                width={900}
                height={900}
                className="category-image"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="category-content">
                <span className="category-tag">Collection</span>
                <h3 className="category-title">Tote Bags</h3>
                <span className="category-link">Explore →</span>
              </div>
            </Link>

            <Link href="/categories" className="category-card">
              <div className="category-overlay" />
              <Image
                src="/images/green-bag-1.png"
                alt="Handbags"
                loading="eager"
                width={900}
                height={900}
                className="category-image"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="category-content">
                <span className="category-tag">Luxury</span>
                <h3 className="category-title">Premium Handbags</h3>
                <span className="category-link">Explore →</span>
              </div>
            </Link>

            <Link href="/categories" className="category-card">
              <div className="category-overlay" />
              <Image
                src="/images/brown-bag-1.png"
                alt="Limited Collection"
                width={900}
                height={900}
                className="category-image"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="category-content">
                <span className="category-tag">Exclusive</span>
                <h3 className="category-title">Limited Collection</h3>
                <span className="category-link">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="container brand-inner">
          <div className="brand-media">
            <div className="brand-image-wrap">
              <Image
                src="/images/brand-storytelling.png"
                alt="Craftsmanship"
                width={800}
                height={900}
                className="brand-image"
                style={{ width: "auto", height: "auto" }}
                loading="eager"
              />
            </div>
          </div>

          <div className="brand-content">
            <span className="section-label">Our Craft</span>
            <h2 className="brand-title">
              Designed with Purpose. Crafted to Endure.
            </h2>
            <p className="brand-desc">
              At Luravia, every piece is created with intention — balancing
              timeless aesthetics, responsible sourcing, and durable
              craftsmanship.
            </p>
            <p className="brand-desc">
              We believe luxury should feel personal, refined, and sustainable.
              Every stitch, texture, and detail reflects our commitment to
              thoughtful design.
            </p>

            <div className="brand-points">
              <div className="brand-point">
                <ShieldCheck size={18} />
                <span>Premium handcrafted materials</span>
              </div>

              <div className="brand-point">
                <ShieldCheck size={18} />
                <span>Sustainably sourced production</span>
              </div>

              <div className="brand-point">
                <ShieldCheck size={18} />
                <span>Built for timeless everyday use</span>
              </div>
            </div>

            <Link href="/about" className="btn btn-primary">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
