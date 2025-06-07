import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import Button from './Button';
import '../components/RecipeForm.css';

const RecipeForm = ({ recipe, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    platillo: '',
    ingredientes: '',
    instrucciones: '',
    tiempoPreparacion: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'tiempoPreparacion' ? Number(value) : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.platillo || formData.platillo.trim().length < 2) {
      newErrors.platillo = 'El nombre del platillo debe tener al menos 2 caracteres';
    }

    if (!formData.ingredientes || formData.ingredientes.trim().length < 10) {
      newErrors.ingredientes = 'Los ingredientes deben tener al menos 10 caracteres';
    }

    if (!formData.instrucciones || formData.instrucciones.trim().length < 20) {
      newErrors.instrucciones = 'Las instrucciones deben tener al menos 20 caracteres';
    }

    if (!formData.tiempoPreparacion || formData.tiempoPreparacion < 1 || formData.tiempoPreparacion > 1440) {
      newErrors.tiempoPreparacion = 'El tiempo debe estar entre 1 y 1440 minutos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="recipe-form">
      <div className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Nombre del Platillo *
          </label>
          <input
            type="text"
            name="platillo"
            value={formData.platillo}
            onChange={handleChange}
            className={`form-input ${errors.platillo ? 'form-input-error' : ''}`}
            placeholder="Ej: Paella Valenciana"
          />
          {errors.platillo && (
            <span className="form-error">{errors.platillo}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Ingredientes *
          </label>
          <textarea
            name="ingredientes"
            value={formData.ingredientes}
            onChange={handleChange}
            rows={4}
            className={`form-textarea ${errors.ingredientes ? 'form-input-error' : ''}`}
            placeholder="Lista detallada de ingredientes..."
          />
          {errors.ingredientes && (
            <span className="form-error">{errors.ingredientes}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Instrucciones *
          </label>
          <textarea
            name="instrucciones"
            value={formData.instrucciones}
            onChange={handleChange}
            rows={6}
            className={`form-textarea ${errors.instrucciones ? 'form-input-error' : ''}`}
            placeholder="Pasos detallados para preparar el platillo..."
          />
          {errors.instrucciones && (
            <span className="form-error">{errors.instrucciones}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Tiempo de Preparación (minutos) *
          </label>
          <input
            type="number"
            name="tiempoPreparacion"
            value={formData.tiempoPreparacion}
            onChange={handleChange}
            className={`form-input ${errors.tiempoPreparacion ? 'form-input-error' : ''}`}
            placeholder="60"
            min="1"
            max="1440"
          />
          {errors.tiempoPreparacion && (
            <span className="form-error">{errors.tiempoPreparacion}</span>
          )}
        </div>

        <div className="form-actions">
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="form-submit"
            icon={Check}
          >
            {loading ? 'Guardando...' : (recipe ? 'Actualizar' : 'Crear Receta')}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            className="form-cancel"
            icon={X}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;