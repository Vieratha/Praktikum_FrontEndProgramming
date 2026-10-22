import Link from "next/link";

const featuredProducts = [
  {
    name: "Machaé Cloud",
    subtitle: "THE SIGNATURE",
    description: "Silky matcha, creamy milk, and a delicate layer of foam.",
    price: "Rp28.000",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",
    slug: "machae-cloud",
    number: "01",
  },
  {
    name: "Jade Whisper",
    subtitle: "THE REFRESHER",
    description: "A refreshing matcha experience with a smooth, earthy finish.",
    price: "Rp30.000",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",
    slug: "jade-whisper",
    number: "02",
  },
  {
    name: "Velvet Whisk",
    subtitle: "THE DESSERT",
    description:
      "A soft, indulgent dessert inspired by the richness of matcha.",
    price: "Rp35.000",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    slug: "velvet-whisk",
    number: "03",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">A LITTLE ART OF MATCHA</p>

          <h1>
            Made for
            <br />
            your <span>soft</span>
            <br />
            moments.
          </h1>

          <p className="hero-description">
            Thoughtfully crafted matcha and delicate desserts to make the little
            moments in life feel a little more special.
          </p>

          <div className="hero-actions">
            <Link href="/menu" className="primary-button">
              Explore the Menu <span>↗</span>
            </Link>

            <Link href="/about" className="secondary-link">
              Our story
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <p>GOOD THINGS TAKE A LITTLE WHISK.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src={featuredProducts[0].image}
              alt="A beautifully presented matcha drink"
            />
          </div>

          <div className="hero-sticker">
            <span>MADE WITH</span>
            <strong>♡</strong>
            <span>INTENTION</span>
          </div>

          <p className="hero-photo-caption">THE MACHAÉ SIGNATURE — NO. 01</p>
        </div>
      </section>

      <div className="brand-strip">
        <span>WHISKED WITH LOVE</span>
        <span className="strip-star">✳</span>
        <span>MADE FOR SLOW MOMENTS</span>
        <span className="strip-star">✳</span>
        <span>A LITTLE TASTE OF JOY</span>
      </div>

      <section className="intro-section">
        <div className="intro-label">
          <span className="eyebrow">OUR LITTLE PHILOSOPHY</span>
          <span className="intro-number">EST. WITH LOVE</span>
        </div>

        <div className="intro-content">
          <h2>
            Not just a treat.
            <br />A <em>moment</em> to keep.
          </h2>

          <div className="intro-description">
            <p>
              At Machaé, we believe that the simplest moments can be the
              sweetest. From the first whisk of matcha to the last bite of
              dessert, every detail matters.
            </p>

            <Link href="/about" className="text-link">
              Get to know us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW HOUSE FAVORITES</p>
            <h2>
              The signature
              <br />
              collection<span>.</span>
            </h2>
          </div>

          <Link href="/menu" className="text-link">
            Discover all treats <span>↗</span>
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.slug}>
              <Link
                href={`/menu/${product.slug}`}
                className="product-photo-link"
              >
                <div className="product-photo">
                  <img src={product.image} alt={product.name} />

                  <span className="product-number">{product.number}</span>

                  <span className="product-arrow">↗</span>
                </div>
              </Link>

              <p className="product-category">{product.subtitle}</p>

              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                </div>

                <p className="product-price">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p className="eyebrow">YOUR NEXT LITTLE RITUAL</p>

        <h2>
          Something lovely
          <br />
          is <em>waiting for you.</em>
        </h2>

        <p>
          Find your favorite matcha and make today a little more delightful.
        </p>

        <Link href="/menu" className="light-button">
          Find Your Favorite <span>↗</span>
        </Link>
      </section>
    </>
  );
}
