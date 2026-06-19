// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* ======================================================
            TOP
        ====================================================== */}
        <div className="footer-top">
          {/* BRAND */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-mark">L</span>

              <span className="footer-logo-text">Luravia</span>
            </Link>

            <p className="footer-desc">
              Thoughtfully crafted bags designed with timeless elegance, premium
              materials, and modern luxury in mind.
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            {/* SHOP */}
            <FooterColumn
              title="Shop"
              links={[
                { label: "All Products", href: "/products" },
                { label: "New Arrivals", href: "/products" },
                { label: "Best Sellers", href: "/products" },
                { label: "Limited Collection", href: "/products" },
              ]}
            />

            {/* COMPANY */}
            <FooterColumn
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Journal", href: "/demo" },
                { label: "Careers", href: "/demo" },
                { label: "Contact", href: "/about" },
              ]}
            />

            {/* SUPPORT */}
            <FooterColumn
              title="Support"
              links={[
                { label: "Shipping", href: "/demo" },
                { label: "Returns", href: "/demo" },
                { label: "FAQ", href: "/demo" },
                { label: "Privacy Policy", href: "/demo" },
              ]}
            />
          </div>
        </div>

        {/* ======================================================
            BOTTOM
        ====================================================== */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Luravia. All rights reserved.
          </span>

          <div className="footer-socials">
            <Link href="/">Instagram</Link>
            <Link href="/">Pinterest</Link>
            <Link href="/">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ======================================================
   FOOTER COLUMN
====================================================== */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="footer-column">
      <span className="footer-heading">{title}</span>

      <ul>
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
