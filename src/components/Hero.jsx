'use client'

const Hero = () => {
    return (
        <header className="hero">
          <div className="hero-copy">
            <h1 className="hero-title">
              Discover new recipes
            </h1>
            <p className="hero-text">
              This project features a curated selection of 20 professional recipes.
              From Mediterranean classics to Asian fusion, each dish includes detailed
              ingredients, step-by-step instructions, and nutritional facts.
            </p>
          </div>

          <div className="hero-media-wrap">
            <img src="/hero-img.jpg" alt="Breakfast Table" className="hero-image" />
          </div>
        </header>
    )
}

export default Hero;