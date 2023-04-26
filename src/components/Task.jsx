/**
 * Composant fonctionnel Task représentant une tâche dans une liste de tâches.
 * 
 * Fonctionnalité :
 * Le composant retourne un élément HTML contenant le texte de la tâche et deux composants d'icônes, EditTask et DeleteTask, permettant respectivement de modifier et de supprimer la tâche.
 * Lorsque l'utilisateur clique sur le bouton de modification de tâche, le composant EditTask est affiché pour permettre la modification des informations de la tâche. Lorsque l'utilisateur soumet la modification, la fonction onEdit est appelée avec les nouvelles informations de la tâche.
 * Lorsque l'utilisateur clique sur le bouton de suppression de tâche, la fonction onDelete est appelée avec l'id de la tâche à supprimer.
 * La fonctionnalité principale du composant Task est donc d'afficher les informations d'une tâche et de permettre sa suppression.
 * 
 * --------------------------------------------------
 * 
 * Importation : 
 * - React : Module principal de React.
 * - EditTask : Composant fonctionnel pour éditer une tâche de la liste.
 * - DeleteTask : Composant fonctionnel pour supprimer une tâche de la liste.
 * 
 * --------------------------------------------------
 * 
 * Props :
 * - task : objet contenant les informations de la tâche.
 * - onEdit : fonction appelée lorsque l'utilisateur souhaite modifier la tâche.
 * - onDelete : fonction appelée lorsque l'utilisateur souhaite supprimer la tâche.
 *
 * --------------------------------------------------
 * 
 * Puis exportation du composant Task.
 */ 

import React, { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const Task = ({ task, onDelete, onEdit }) => {
    const [showEditForm, setShowEditForm] = useState(false);
  
    const handleEditClick = () => {
        setShowEditForm(true);
    };
  
    const handleEditSubmit = (editedTask) => {
        onEdit(editedTask);
        setShowEditForm(false);
    };
  
    const handleEditCancel = () => {
        setShowEditForm(false);
    };
    
    return (
      <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>
                {task.text}{' '}
                <FaEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={handleEditClick} />
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            {showEditForm ? (
                <EditTask task={task} onEdit={handleEditSubmit} onCancel={handleEditCancel} />
            ) : (
                <p>{task.day}</p>
            )}
        </div>
    );
  };

export default Task;
