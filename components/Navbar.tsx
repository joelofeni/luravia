"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, ShoppingBag } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const { cart } = useCart();

  const cartCount = mounted
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="container navbar-inner">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="logo-mark">L</span>

          <span className="logo">Luravia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.name}
            </NavLink>
          ))}

          <div className="flex items-center gap-3 pl-6 border-l nav-divider">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="theme-toggle"
            >
              {!mounted ? (
                <div style={{ width: 18, height: 18 }} />
              ) : theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <Link href="/cart" className="cart-btn">
              <ShoppingBag size={18} />
              {mounted && cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>

            <Link href="/login" className="auth-link">
              Log in
            </Link>

            <Link href="/signup" className="btn-signup">
              Sign up
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="theme-toggle"
          >
            {!mounted ? (
              <div style={{ width: 18, height: 18 }} />
            ) : theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className={`menu-trigger ${
              scrolled ? "menu-trigger-scrolled" : ""
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="menu-overlay"
          >
            <div className="menu-nav">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="menu-link"
                >
                  {l.name}
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="cart-btn"
              >
                <ShoppingBag size={18} />

                {mounted && cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </Link>

              <div className="flex items-center gap-3 pt-4 mt-4 border-t">
                <Link
                  href="/login"
                  className="auth-link"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>

                <Link
                  href="/signup"
                  className="btn-signup"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`nav-link text-sm font-medium transition-colors duration-150 ${
        isActive ? "active" : ""
      }`}
    >
      {children}
    </Link>
  );
}
