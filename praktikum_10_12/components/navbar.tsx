"use client";

import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#about" },
    { label: "Our Menu", href: "#menu" },
    { label: "Profile", href: "#profile" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "profile", "contact"];

      const scrollPosition = window.scrollY + 170;
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className="machae-navbar sticky-top">
      <Container fluid="lg">
        <Navbar.Brand href="#home" className="machae-brand">
          Machaé
          <span> MATCHA & DESSERT KITCHEN</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="machae-navbar"
          aria-label="Buka navigasi"
        />

        <Navbar.Collapse id="machae-navbar">
          <Nav className="ms-auto machae-nav">
            {navLinks.map((link) => {
              const section = link.href.replace("#", "");
              const isActive = activeSection === section;

              return (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
