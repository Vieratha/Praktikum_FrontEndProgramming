"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="navbar">
      <Link href="/" className="navbar-brand">
        <img
          src="/logo.png"
          alt="Machaé Matcha & Dessert Kitchen"
          className="navbar-logo"
        />
      </Link>

      <nav className="nav-links">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === "/menu" && pathname.startsWith("/menu/"));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
