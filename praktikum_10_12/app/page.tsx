"use client";

import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        {/* Ini bagian pengenalan Machaé */}
        <section id="about" className="intro-section">
          <p className="section-label">OUR PHILOSOPHY</p>
          <h2>
            Little moments,
            <br />
            made more delightful.
          </h2>
          <p>
            From carefully crafted matcha drinks to delightful desserts, every
            creation is made to bring a little joy to your day.
          </p>
        </section>

        {/* Bagian produk unggulan */}
        <section id="menu" className="menu-section">
          <div className="section-heading">
            <div>
              <p className="section-label">A TASTE OF MACHAÉ</p>
              <h2>Our Signature Collection</h2>
            </div>

            <a href="#contact" className="text-link">
              Discover More →
            </a>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <img src="/images/macha.avif" alt="Signature Matcha" />

              <div className="product-info">
                <p>SIGNATURE MATCHA</p>
                <h3>Machaé Cloud</h3>
                <span>Creamy matcha with a delicate, silky finish.</span>
                <strong>Rp28.000</strong>
              </div>
            </div>

            <div className="product-card">
              <img src="/images/jadewhisper.avif" alt="Jade Whisper" />

              <div className="product-info">
                <p>FRESH & LIGHT</p>
                <h3>Jade Whisper</h3>
                <span>A refreshing matcha with a smooth, earthy taste.</span>
                <strong>Rp30.000</strong>
              </div>
            </div>

            <div className="product-card">
              <img src="/images/cake.avif" alt="Velvet Whisk" />

              <div className="product-info">
                <p>MATCHA DESSERT</p>
                <h3>Velvet Whisk</h3>
                <span>
                  A delicate dessert inspired by the richness of matcha.
                </span>
                <strong>Rp35.000</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian penutup */}
        <section id="contact" className="closing-section">
          <p className="section-label">STAY A LITTLE LONGER</p>

          <h2>
            Let’s make your day
            <br />a little more special.
          </h2>

          <p>Discover a little sweetness in every sip and every bite.</p>
        </section>
      </main>

      <footer className="footer">
        <h2>Machaé</h2>
        <p>Matcha & Dessert Kitchen</p>
        <span>© 2026 Machaé. All rights reserved.</span>
      </footer>
    </div>
  );
}
