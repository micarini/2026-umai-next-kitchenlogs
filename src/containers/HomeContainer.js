'use client'

import {useState, useEffect} from 'react';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardsGrid from "@/components/CardsGrid";
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
      const data = (response.data.recipes || []).map((recipe) => ({
        name: recipe.name,
        image: recipe.image,
        time: `${recipe.prepTimeMinutes ?? 0} MIN`,
        level: recipe.difficulty ?? 'EASY',
      }));

      setItems(data);
    } catch (error) {
      console.log('Hubo un error', error);
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
    <div className="app-shell">
      <section className="top-section">
        <Navbar />
        <Hero />
      </section>

      <main className="content-main">
        {loading && <div className="status-message">Loading...</div>}
        {error && <div className="status-message error">{errorMsg}</div>}
        {!loading && <CardsGrid items={items.length ? items : recipes} />}
      </main>

      
    </div>
  );
};

export default HomeContainer;