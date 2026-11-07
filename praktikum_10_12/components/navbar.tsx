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
    const sections = ["home", "about", "menu", "profile", "contact"];

    const handleScroll = () => {
      const navbar = document.querySelector(".machae-navbar");

      const navbarBottom =
        navbar instanceof HTMLElement
          ? navbar.getBoundingClientRect().bottom
          : 100;

      const activationLine = navbarBottom + 25;

      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= documentHeight - 60) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const sectionPosition = element.getBoundingClientRect().top;

        if (sectionPosition <= activationLine) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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
          <Nav
            className="ms-auto machae-nav"
            activeKey={activeSection}
            onSelect={(selectedKey) => {
              if (typeof selectedKey === "string") {
                setActiveSection(selectedKey);
              }
            }}
          >
            {navLinks.map((link) => {
              const section = link.href.replace("#", "");

              return (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  eventKey={section}
                  aria-current={
                    activeSection === section ? "location" : undefined
                  }
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
