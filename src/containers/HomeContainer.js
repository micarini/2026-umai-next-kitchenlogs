'use client'

import {useState, useEffect} from 'react';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
        <Hero />
      </section>

      <main className="px-3 pb-8 pt-10 md:px-5">
        <CardsGrid items={items.length ? items : recipes} /*items es una prop que viene desde CardsGrid*/ />
      </main>

      
    </div>
  );
};

export default HomeContainer;