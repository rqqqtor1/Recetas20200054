import React, { useState } from 'react';
import { ChefHat, Plus, ArrowLeft } from 'lucide-react';
import Title from '../components/Title';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import RecipeForm from '../components/RecipeForm';
import LoadingSpinner from '../components/LoadingSpinner';
import Message from '../components/Message';
import useFetchRecipes from '../hooks/useFetchRecipes';
import useSaveRecipe from '../hooks/useSaveRecipe';
import useDeleteRecipe from '../hooks/useDeleteRecipes';
import '../pages/HomePage.css';

const HomePage = ({ onNavigate }) => {
  const { data: recipes, loading, error, refetch } = useFetchRecipes();
  const { saveRecipe, loading: saveLoading } = useSaveRecipe();
  const { deleteRecipe } = useDeleteRecipe();
  const [showModal, setShowModal] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [message, setMessage] = useState(null);

  const showMessage = (type, text) => {
    setMessage({ type, text });
  };

  const handleSubmit = async (data) => {
    try {
      if (editingRecipe) {
        await saveRecipe(data, 'PUT', editingRecipe.id);
        showMessage('success', 'Receta actualizada exitosamente');
      } else {
        await saveRecipe(data, 'POST');
        showMessage('success', 'Receta creada exitosamente');
      }
      setShowModal(false);
      setEditingRecipe(null);
      refetch();
    } catch (err) {
      showMessage('error', 'Error al guardar la receta');
    }
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta receta?')) {
      try {
        await deleteRecipe(id);
        showMessage('success', 'Receta eliminada exitosamente');
        refetch();
      } catch (err) {
        showMessage('error', 'Error al eliminar la receta');
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingRecipe(null);
  };

  if (loading && recipes.length === 0) {
    return (
      <div className="home-loading">
        <LoadingSpinner />
        <p>Cargando recetas...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      {message && (
        <Message
          type={message.type}
          message={message.text}
          onClose={() => setMessage(null)}
        />
      )}

      <div className="home-content">
        <div className="home-header">
          <div className="home-header-left">
            <Button
              onClick={() => onNavigate('welcome')}
              variant="secondary"
              icon={ArrowLeft}
              className="back-button"
            >
              Volver
            </Button>
            <ChefHat size={40} className="home-icon" />
            <Title className="home-title">Administrador de Recetas</Title>
          </div>
          
          <Button
            onClick={() => setShowModal(true)}
            icon={Plus}
            className="add-button"
          >
            Nueva Receta
          </Button>
        </div>

        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}

        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {recipes.length === 0 && !loading && (
          <div className="empty-state">
            <ChefHat size={80} className="empty-icon" />
            <h3 className="empty-title">
              No hay recetas registradas
            </h3>
            <p className="empty-description">
              Comienza agregando tu primera receta
            </p>
            <Button
              onClick={() => setShowModal(true)}
              icon={Plus}
            >
              Crear Primera Receta
            </Button>
          </div>
        )}
      </div>

      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title={editingRecipe ? 'Editar Receta' : 'Nueva Receta'}
      >
        <RecipeForm
          recipe={editingRecipe}
          onSubmit={handleSubmit}
          onCancel={handleCloseModal}
          loading={saveLoading}
        />
      </Modal>
    </div>
  );
};

export default HomePage;