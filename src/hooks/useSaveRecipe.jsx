import { useState } from 'react';

const useSaveRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveRecipe = async (recipeData, method = 'POST', id = null) => {
    setLoading(true);
    setError(null);
    
    try {
      const url = id 
        ? `https://retoolapi.dev/DBFXqn/recetas/${id}`
        : 'https://retoolapi.dev/DBFXqn/recetas';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la receta');
      }

      const result = await response.json();
      return result;
    } catch (err) {
      setError(err.message);
      console.error('Error saving recipe:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { 
    saveRecipe, 
    loading, 
    error 
  };
};

export default useSaveRecipe;