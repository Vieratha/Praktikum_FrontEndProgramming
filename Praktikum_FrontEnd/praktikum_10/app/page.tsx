import NavBar from "../components/navbar";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />

      <section id="about" className="container py-5 text-center">
        <h2>About Us</h2>
        <p className="text-secondary">
          Welcome to our website. This is the about section.
        </p>
      </section>

      <section id="contact" className="container py-5 text-center">
        <h2>Contact</h2>
        <p className="text-secondary">Thank you for visiting our website.</p>
      </section>
    </main>
  );
}
