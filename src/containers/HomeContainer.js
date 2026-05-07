'use client'

import {useState, useEffect} from 'react';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardsGrid from "@/components/CardsGrid";
import recipes from "@/data/dummy";

import axios from 'axios'; 

const HomeContainer = () => {

  const [items, setItems] = useState([]); /*dejo un array vacio para los items */

  const handleGetItems = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0');
      const data = response.data.recipes; /*recipes es el nombre del array en el json, puede ser otra cosa */
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log('Hubo un error', error);
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <section className="bg-[#93a74d] p-4">
        <Navbar />

        <header className="mt-6 grid min-h-[calc(100vh-9rem)] items-stretch gap-4 md:grid-cols-[35%_65%]">
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
            <img src="/hero-img.jpg" alt="Breakfast Table" className="h-full w-full rounded-3xl object-cover" />
          </div>
        </header>
      </section>

      <main className="px-3 pb-8 pt-10 md:px-5">
        <CardsGrid items={items.length ? items : recipes} /*items es una prop que viene desde CardsGrid*/ />
      </main>

      <Footer />
    </div>
  );
};

export default HomeContainer;