"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function DemoPage() {
  return (
    <main className="demo-page">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="demo-card"
      >
        <div className="demo-icon">
          <Sparkles size={26} />
        </div>

        <span className="demo-tag">Demo Experience</span>

        <h1 className="demo-title">This section is still being crafted</h1>

        <p className="demo-desc">
          Luravia is a showcase experience. Some areas are intentionally left in
          progress to demonstrate structure and design.
        </p>

        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={18} />
          Return Home
        </Link>
      </motion.div>
    </main>
  );
}
