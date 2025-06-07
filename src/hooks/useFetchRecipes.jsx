import { useState, useEffect } from 'react';

const useFetchRecipes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://retoolapi.dev/DBFXqn/recetas');
      if (!response.ok) {
        throw new Error('Error al cargar las recetas');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching recipes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { 
    data, 
    loading, 
    error, 
    refetch: fetchData 
  };
};

export default useFetchRecipes;