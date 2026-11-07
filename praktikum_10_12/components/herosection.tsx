"use client";

import Carousel from "react-bootstrap/Carousel";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    title: "A Little Matcha, A Lot of Happiness.",
    subtitle:
      "Thoughtfully crafted matcha to make your everyday moments more special.",
    imageUrl: "/images/macha.avif",
    buttonText: "Explore Our Collection",
    buttonLink: "#menu",
  },
  {
    title: "A Moment of Calm in Every Sip.",
    subtitle:
      "Discover comforting tea moments, made with care and a little love.",
    imageUrl: "/images/jadewhisper.avif",
    buttonText: "Discover Our Story",
    buttonLink: "#about",
  },
  {
    title: "Sweetness Worth Slowing Down For.",
    subtitle:
      "Enjoy delightful desserts and little moments of happiness at Machaé.",
    imageUrl: "/images/cake.avif",
    buttonText: "Meet Our Curator",
    buttonLink: "#profile",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <Carousel
        fade
        interval={4000}
        pause={false}
        indicators={true}
        controls={true}
        wrap={true}
        className="machae-carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.imageUrl}>
            <div className="hero-slide">
              <img
                src={slide.imageUrl}
                alt={`Machaé banner ${index + 1}`}
                className="hero-image"
              />

              <div className="hero-overlay"></div>

              <Carousel.Caption className="hero-caption">
                <p className="hero-eyebrow">MATCHA & DESSERT KITCHEN</p>

                <h1>{slide.title}</h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <a href={slide.buttonLink} className="hero-button">
                  {slide.buttonText}
                  <span>→</span>
                </a>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
