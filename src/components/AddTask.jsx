/**
 * Composant fonctionnel AddTask pour ajouter une nouvelle tâche à la liste.
 * 
 * Fonctionnalité :
 * Le composant permet à l'utilisateur d'ajouter une nouvelle tâche à la liste.
 * Lorsque l'utilisateur saisit du texte dans le champ de texte et clique sur "Ajouter la tâche", 
 * la fonction onSubmit est appelée pour ajouter la tâche à la liste.
 * Si le champ de texte est vide et que l'utilisateur clique sur "Ajouter la tâche", 
 * une alerte s'affiche pour demander à l'utilisateur d'ajouter une tâche.
 * Le champ de texte est mis à jour en temps réel à mesure que l'utilisateur saisit du texte grâce à la fonction onChange.
 * 
 * --------------------------------------------------
 * 
 *  Importation : 
 * - React : Module principal de React.
 * - useState : Fonction React permettant de définir et de mettre à jour l'état d'un composant.
 * 
 * --------------------------------------------------
 * 
 * Props :
 * - onAdd : fonction appelée lorsqu'un utilisateur ajoute une tâche.
 * 
 * --------------------------------------------------
 * 
 * État :
 * - text : état local contenant le texte de la nouvelle tâche à ajouter.
 * 
 * --------------------------------------------------
 * 
 * Fonctions :
 * - useState : permet de définir et de mettre à jour l'état local du composant.
 * - onSubmit : fonction appelée lorsque l'utilisateur soumet le formulaire d'ajout de tâche.
 * - onChange : fonction appelée lorsque l'utilisateur saisit du texte dans le champ de texte.
 * 
 * --------------------------------------------------
 * 
 * Puis exportation du composant AddTask.
 */ 
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Ajouter un texte au champ');
      return;
    }
    onAdd({ text });
    setText('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn'>Ajouter la tâche</button>
      </div>
    </form>
  );
};

export default AddTask;