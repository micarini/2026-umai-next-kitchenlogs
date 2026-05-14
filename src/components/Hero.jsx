'use client'
import { Image } from 'react-native'

const Hero = () => {
    return (
        <header className="mt-6 grid min-h-[60vh] md:min-h-[calc(100vh-9rem)] items-stretch gap-4 md:grid-cols-[35%_65%]">
          <div className="px-2 py-6 md:px-4 md:py-10">
            <h1 className="[font-family:var(--font-oswald)] text-[3rem] font-bold uppercase leading-[0.85] tracking-[0.01em] md:text-[5.25rem]">
              Discover new recipes
            </h1>
            <p className="mt-6 max-w-[18rem] text-[0.98rem] leading-[1.4]">
              This project features a curated selection of 20 professional recipes.
              From Mediterranean classics to Asian fusion, each dish includes detailed
              ingredients, step-by-step instructions, and nutritional facts.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl p-2">
            <Image src="/hero-img.jpg" style={{ width: '100%', height: '100%' }} alt="Breakfast Table" className="h-full w-full rounded-3xl object-cover" />
          </div>
        </header>
    )
}

export default Hero;