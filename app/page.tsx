import Link from "next/link";

const featuredProducts = [
  {
    name: "Machaé Cloud",
    category: "SIGNATURE MATCHA",
    description: "Creamy matcha with a delicate, silky finish.",
    price: "Rp28.000",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",
    slug: "machae-cloud",
  },
  {
    name: "Jade Whisper",
    category: "FRESH & LIGHT",
    description: "A refreshing matcha with a smooth, earthy taste.",
    price: "Rp30.000",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    slug: "jade-whisper",
  },
  {
    name: "Velvet Whisk",
    category: "MATCHA DESSERT",
    description: "A delicate dessert inspired by the richness of matcha.",
    price: "Rp35.000",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    slug: "velvet-whisk",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">MATCHA & DESSERT KITCHEN</p>

          <h1>
            A little matcha,
            <br />a lot of <em>happiness.</em>
          </h1>

          <p className="hero-description">
            Thoughtfully crafted matcha and delightful desserts to make your
            everyday moments a little more special.
          </p>

          <Link href="/menu" className="primary-button">
            Explore Our Menu <span>→</span>
          </Link>
        </div>

        <div className="hero-visual">
          <img
            src={featuredProducts[0].image}
            alt="Machaé signature matcha drink"
          />
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">OUR PHILOSOPHY</p>

        <h2>
          Little moments,
          <br />
          made more delightful.
        </h2>

        <p className="intro-description">
          From comforting matcha drinks to delicate desserts, every creation is
          made to bring a little joy to your day.
        </p>

        <Link href="/about" className="text-link">
          Discover Our Story →
        </Link>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A TASTE OF MACHAÉ</p>
            <h2>Our Signature Collection</h2>
          </div>

          <Link href="/about" className="text-link">
            Discover Our Story →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.slug}>
              <Link
                href={`/menu/${product.slug}`}
                className="product-image-link"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </Link>

              <p className="product-category">{product.category}</p>

              <div className="product-info">
                <div className="product-title-row">
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>

                <p className="product-description">{product.description}</p>
              </div>

              <Link href={`/menu/${product.slug}`} className="text-link">
                Discover Product →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p className="eyebrow">STAY A LITTLE LONGER</p>

        <h2>
          Let’s make your day
          <br />a little more <em>special.</em>
        </h2>

        <Link href="/contact" className="closing-link">
          Get in Touch →
        </Link>
      </section>
    </>
  );
}
