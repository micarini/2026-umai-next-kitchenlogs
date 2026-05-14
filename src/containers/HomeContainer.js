
'use client'

import { useEffect, useState } from 'react';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardsGrid from "@/components/CardsGrid";
import RecipeRequestState from '@/components/RecipeRequestState';
import recipes from "@/data/dummy";

import axios from 'axios';

const HomeContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGetItems = async () => {
    try {
      setLoading(true);
      setError(false);
      setErrorMsg('');

      const response = await axios.get('https://dummyjson.com/recipes?limit=0');
      const data = (response.data.recipes ?? []).map((recipe) => ({ /* mapeo la data que me llega de la api para que tenga el mismo formato que las recetas locales, asi puedo mostrar las recetas de la api sin problemas y si hay un error muestro las recetas locales sin que se rompa nada */
        /* uso ?? en vez de || porque no quiero que si hay un valor falsy sea reemplazado: el fallback [] se usa cuando el valor es "falsy", o sea también con false, 0 o '' */
          id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        time: `${recipe.prepTimeMinutes ?? 0} MIN`,
        level: recipe.difficulty ?? 'EASY',
      }));

      setItems(data);
    } catch {
      setError(true);
      setErrorMsg('Hubo un error al cargar las recetas. Mostrando recetas locales.');
    } finally {
      setLoading(false);
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
        <RecipeRequestState
          loading={loading}
          error={error}
          errorMessage={errorMsg}
        />
        {!loading && <CardsGrid items={items.length ? items : recipes} />}
      </main>
    </div>
  );
};

export default HomeContainer;