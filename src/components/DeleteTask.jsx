/**
 * Composant fonctionnel DeleteTask pour supprimer une tâche de la liste.
 * 
 * Fonctionnalité :
 * La fonctionnalité de ce composant est de permettre à l'utilisateur de supprimer une tâche de la liste 
 * en cliquant sur le bouton "Supprimer la tâche". 
 * Lorsque le bouton est cliqué, la fonction onDelete est appelée avec l'id de la tâche à supprimer en paramètre. 
 * Cette fonction est passée en tant que prop depuis le composant parent qui gère la liste de tâches.
 * 
 * --------------------------------------------------
 * 
 * Importation :
 * - React : Module principal de React.
 * 
 * --------------------------------------------------
 * 
 * Props :
 * - task : objet contenant les informations de la tâche à supprimer.
 * - onDelete : fonction appelée lorsque l'utilisateur souhaite supprimer la tâche.
 * 
 * --------------------------------------------------
 * 
 * Fonctions :
 * - onClick : fonction appelée lorsque l'utilisateur clique sur le bouton de suppression de tâche.
 * 
 * --------------------------------------------------
 * 
 * Puis exportation du composant DeleteTask.
*/

import React from 'react';
const DeleteTask = ({ onDelete, task }) => {

    return (
        <button className='btn delete-btn' onClick={() => onDelete(task.id)}>Supprimer la tâche</button>
    );
};
export default DeleteTask;

