"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}

      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="about-label">Our Story</span>

            <h1 className="about-title">Designed Around Modern Luxury</h1>

            <p className="about-desc">
              Luravia was created around simplicity, craftsmanship and carefully
              selected products that elevate everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}

      <section className="about-values">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div>
                <strong>Quality First</strong>

                <span>
                  Every product is carefully selected with attention to detail.
                </span>
              </div>
            </div>

            <div className="trust-item">
              <div>
                <strong>Modern Design</strong>

                <span>Clean aesthetics with timeless appeal.</span>
              </div>
            </div>

            <div className="trust-item">
              <div>
                <strong>Fast Delivery</strong>

                <span>Reliable shipping experience globally.</span>
              </div>
            </div>

            <div className="trust-item">
              <div>
                <strong>Customer Focus</strong>

                <span>Every experience built around users.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="about-contact">
        <div className="container">
          <div className="about-contact-card">
            <span className="about-label">Contact</span>

            <h2 className="about-contact-title">
              We&apos;d love to hear from you
            </h2>

            <p className="about-contact-desc">
              Questions, support, partnerships, or feedback.
            </p>
            <form className="about-form">
              <div className="about-form-row">
                <input
                  type="text"
                  placeholder="Your name"
                  className="about-input"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="about-input"
                />
              </div>

              <textarea
                placeholder="Your message..."
                className="about-textarea"
              />

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            <div className="about-contact-links">
              <a href="#">support@luravia.com</a>

              <a href="#">+1 (000) 000-0000</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
