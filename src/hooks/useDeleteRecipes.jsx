import { useState } from 'react';

const useDeleteRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteRecipe = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://retoolapi.dev/DBFXqn/recetas/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la receta');
      }

      return true;
    } catch (err) {
      setError(err.message);
      console.error('Error deleting recipe:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { 
    deleteRecipe, 
    loading, 
    error 
  };
};

export default useDeleteRecipe;