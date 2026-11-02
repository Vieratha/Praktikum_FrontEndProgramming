"use client";

import Carousel from "react-bootstrap/Carousel";
import styles from "../app/page.module.css";

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "Uriel",
    subtitle: "The Demon-like Judge of Fire",
    imageUrl: "/images/uriel.png",
  },
  {
    title: "Han Sooyoung",
    subtitle: "The Writer Who Shapes the Story",
    imageUrl: "/images/hansooyoung.jpg",
  },
  {
    title: "Yoo Sangah",
    subtitle: "Grace in the Middle of Chaos",
    imageUrl: "/images/yoosangah.webp",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      <Carousel
        fade
        interval={4000}
        pause="hover"
        className={styles.heroCarousel}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.title}>
            <div className={styles.heroSlide}>
              <img
                src={slide.imageUrl}
                alt={`Banner ${index + 1}`}
                className={styles.heroImage}
              />
              <div className={styles.heroOverlay} />
              <Carousel.Caption className={styles.heroCaption}>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
