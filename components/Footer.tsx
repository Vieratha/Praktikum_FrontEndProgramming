import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Machaé
          </Link>

          <p>Matcha & Dessert Kitchen</p>

          <p className="footer-description">
            A little sweetness for your everyday moments.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/menu">Our Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Have a lovely day with Machaé.</p>
          <Link href="/contact" className="footer-contact-link">
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Machaé. All rights reserved.</p>
        <p>Made with care, served with love.</p>
      </div>
    </footer>
  );
}
