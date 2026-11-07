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

        {/* Bagian pengenalan Machaé */}
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

        {/* Bagian koleksi menu unggulan */}
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
              <img src="/images/jadewhisper.avif" alt="Tea and Cookies" />

              <div className="product-info">
                <p>FRESH & LIGHT</p>
                <h3>Jade Whisper</h3>
                <span>A comforting tea paired with delightful cookies.</span>
                <strong>Rp30.000</strong>
              </div>
            </div>

            <div className="product-card">
              <img src="/images/cake.avif" alt="Chocolate Cake" />

              <div className="product-info">
                <p>HOUSE DESSERT</p>
                <h3>Velvet Whisk</h3>
                <span>
                  A delightful chocolate cake for a little indulgence.
                </span>
                <strong>Rp35.000</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian profil karakter kreatif Machaé */}
        <section id="profile" className="profile-section">
          <div className="profile-image">
            <img src="/images/uriel.png" alt="Machaé Creative Muse" />
          </div>

          <div className="profile-content">
            <p className="section-label">A LITTLE ABOUT THE CREATIVE SOUL</p>

            <h2>
              Meet the
              <br />
              Creative Curator.
            </h2>

            <p>
              Every little detail at Machaé begins with a love for creativity,
              thoughtful experiences, and the joy of sharing something special.
              Meet the character behind our creative inspiration.
            </p>

            <span className="profile-name">The Creative Curator</span>
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
