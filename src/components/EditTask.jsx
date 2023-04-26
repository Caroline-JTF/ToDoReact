/**
 * Composant fonctionnel EditTask qui gère l'édition d'une tâche.
 * 
 * Fonctionnalité :
 * Le composant retourne un formulaire permettant de modifier le texte d'une tâche.
 * Lorsque l'utilisateur soumet le formulaire, la fonction onEdit est appelée avec la tâche éditée.
 * Si le champ de texte est vide, une alerte est affichée pour indiquer qu'il faut ajouter une tâche.
 * 
 * --------------------------------------------------
 * 
 * Importation :
 * - React : Module principal de React.
 * - useState : Fonction React permettant de définir et de mettre à jour l'état d'un composant.
 * 
 * --------------------------------------------------
 * 
 * Props :
 * - task : la tâche à éditer.
 * - onEdit : fonction qui sera appelée lorsque l'utilisateur soumettra le formulaire d'édition.
 * - onCancel : fonction appelée lorsque l'utilisateur annule l'édition de la tâche.
 * 
 * --------------------------------------------------
 * 
 * État :
 * - text : état local contenant le texte de la tâche éditée.
 * 
 * --------------------------------------------------
 * 
 * Fonctions :
 * - handleSubmit : fonction appelée lorsque l'utilisateur soumet le formulaire d'édition. Elle vérifie si le champ de texte est vide, affiche une alerte si c'est le cas, sinon appelle la fonction onEdit avec la tâche éditée.
 * - handleCancel : fonction appelée lorsque l'utilisateur annule l'édition de la tâche. Elle appelle la fonction onCancel pour fermer le formulaire d'édition.
 * - onSubmit : fonction appelée lorsque l'utilisateur soumet le formulaire d'édition.
 * 
 * --------------------------------------------------
 * 
 * Puis exportation du composant EditTask.
*/

import React, { useState } from 'react';

const EditTask = ({ task, onEdit, onCancel }) => {
    const [text, setText] = useState(task.text);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Ajouter une tâche');
            return;
        }
        onEdit({ ...task, text });
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <input type='text' placeholder='Edit Task' value={text} onChange={(e) => setText(e.target.value)} />
                <button className='btn' type='submit'>Edit Task</button>
                <button className='btn' type='button' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};


export default EditTask;
