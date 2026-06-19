"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

import { Apple, Loader2, CheckCircle2, XCircle } from "lucide-react";

import Link from "next/link";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const hasError = Boolean(error);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setStatus("idle");

    if (!email.trim() || !password.trim() || !confirm.trim()) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 1000);
  };

  const handleSocial = () => {
    setLoading(true);

    setStatus("idle");

    setTimeout(() => {
      setLoading(false);

      Math.random() > 0.3 ? setStatus("success") : setStatus("error");
    }, 1000);
  };

  const socials = [
    {
      symbol: "G",
      label: "Continue with Google",
      key: "google",
    },
    {
      symbol: "GH",
      label: "Continue with GitHub",
      key: "github",
    },
    {
      symbol: "",
      label: "Continue with Apple",
      key: "apple",
    },
  ];

  return (
    <section className="auth-page">
      {/* BACKGROUND */}
      <div className="auth-bg">
        <div className="auth-orb auth-orb-left" />
        <div className="auth-orb auth-orb-right" />
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="auth-card"
      >
        {/* LOGO */}
        <Link href="/" className="auth-logo">
          <span className="auth-logo-mark">L</span>

          <span className="auth-logo-text">Luravia</span>
        </Link>

        {/* HEADER */}
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>

          <p className="auth-subtitle">
            Join Luravia and discover premium handcrafted collections.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* EMAIL */}
          <div className="auth-field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              value={email}
              disabled={loading}
              aria-invalid={hasError}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </div>

          {/* PASSWORD */}
          <div className="auth-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              disabled={loading}
              aria-invalid={hasError}
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </div>

          {/* CONFIRM */}
          <div className="auth-field">
            <label htmlFor="confirm">Confirm Password</label>

            <input
              id="confirm"
              type="password"
              value={confirm}
              disabled={loading}
              aria-invalid={hasError}
              placeholder="Confirm your password"
              onChange={(e) => setConfirm(e.target.value)}
              className="auth-input"
            />
          </div>

          {/* STATUS */}
          {error && (
            <p className="auth-error">
              <XCircle size={16} />
              {error}
            </p>
          )}

          {status === "success" && (
            <p className="auth-success">
              <CheckCircle2 size={16} />
              Account created successfully
            </p>
          )}

          {status === "error" && (
            <p className="auth-error">
              <XCircle size={16} />
              Signup failed
            </p>
          )}

          {/* SUBMIT */}
          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Processing...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        {/* SOCIALS */}
        <div className="auth-socials">
          {socials.map((s) => (
            <button
              key={s.key}
              type="button"
              disabled={loading}
              onClick={handleSocial}
              className="auth-social-btn"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <span className="auth-social-symbol">{s.symbol}</span>
              )}

              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* FOOT */}
        <p className="auth-foot">
          Already have an account?
          <Link href="/login">Log in</Link>
        </p>
      </motion.div>
    </section>
  );
}
