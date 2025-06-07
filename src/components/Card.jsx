import React from 'react';
import { Edit, Trash2, Clock, List } from 'lucide-react';
import Button from './Button';
import '../components/Card.css';

const Card = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-content">
        <div className="recipe-card-header">
          <h3 className="recipe-title">
            {recipe.platillo}
          </h3>
          <div className="recipe-actions">
            <Button
              onClick={() => onEdit(recipe)}
              variant="secondary"
              className="action-btn"
              icon={Edit}
            />
            <Button
              onClick={() => onDelete(recipe.id)}
              variant="danger"
              className="action-btn"
              icon={Trash2}
            />
          </div>
        </div>

        <div className="recipe-time">
          <Clock size={16} />
          <span>{recipe.tiempoPreparacion} minutos</span>
        </div>

        <div className="recipe-details">
          <div className="recipe-section">
            <h4 className="recipe-section-title">
              <List size={16} />
              Ingredientes:
            </h4>
            <p className="recipe-text">
              {recipe.ingredientes}
            </p>
          </div>

          <div className="recipe-section">
            <h4 className="recipe-section-title">Instrucciones:</h4>
            <p className="recipe-text">
              {recipe.instrucciones}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;