'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeRequestState from '@/components/RecipeRequestState';

const RecipeContainer = ({ id }) => { /*recibo el id que me llega por props desde el page.js, lo uso para hacer la consulta a la api y traer la receta correspondiente a ese id */
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hace el fetch de la receta y va acomodando los estados segun lo que pase
  const handleGetRecipe = async () => {
    // Reseteo estados antes de arrancar otra request, por si cambia el id
    setLoading(true);
    setNotFound(false);
    setError(false);
    setErrorMessage('');
    setItem(null);

    try {
      // pido la receta a DummyJSON usando el id que viene por props
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      const data = response.data;

      // guardo la receta en state para renderizarla abajo
      setItem(data);
    } catch (error) {
      // Si la API responde 404, mostramos el estado de "no encontrada"
      if (error.response?.status === 404) {
        setNotFound(true);
      } else {
        // Cualquier otro error lo tratamos como error general de carga.
        setError(true);
        setErrorMessage('Something went wrong while loading the recipe.');
      }

      // Log para debug, por si algo falla en dev.
      console.log(error);
    } finally {
      // Siempre apagamos loading, pase lo que pase.
      setLoading(false);
    }
  };

  // Cada vez que cambia el id, volvemos a pedir la receta
  useEffect(() => {
    handleGetRecipe();
  }, [id]);

  return (
    <div>
      {/* Componente reusable que muestra loading, error o not found. */}
      <RecipeRequestState
        loading={loading}
        error={error}
        notFound={notFound}
        errorMessage={errorMessage}
      />

      {/* Cuando todo salió bien, mostramos el contenido de la receta. */}
      {!loading && !error && !notFound && item && (
        <>
          <h1>{item.name}</h1>
          <section>CONTENIDO</section>
        </>
      )}
    </div>
  );
};

export default RecipeContainer;
