/**
 * Composant fonctionnel App qui gère l'application To-Do List.
 * 
 * Fonctionnalité :
 * Le composant retourne l'interface utilisateur de l'application To-Do List, qui se compose d'un en-tête contenant le titre et le formulaire d'ajout de tâche, et d'une liste de tâches. 
 * Si la liste des tâches est vide, un message est affiché pour indiquer qu'il n'y a pas de tâche à faire.
 * Lorsqu'un utilisateur ajoute une tâche en utilisant le formulaire AddTask, la fonction addTask est appelée pour ajouter la tâche à la liste. 
 * Lorsqu'un utilisateur édite une tâche en utilisant le composant EditTask, la fonction editTask est appelée pour mettre à jour la tâche dans la liste.
 * Lorsqu'un utilisateur supprime une tâche en utilisant le bouton de suppression de Task, la fonction deleteTask est appelée pour supprimer la tâche de la liste.
 * 
 * --------------------------------------------------
 * 
 * Importation :
 * - React : Module principal de React.
 * useState : Fonction React permettant de définir et de mettre à jour l'état d'un composant.
 * - Task : Composant fonctionnel pour afficher une tâche de la liste.
 * - AddTask : Composant fonctionnel pour ajouter une nouvelle tâche à la liste.
 * - EditTask : Composant fonctionnel pour éditer une tâche de la liste.
 * 
 * --------------------------------------------------
 * 
 * État :
 * - tasks : état local contenant la liste des tâches.
 * 
 * --------------------------------------------------
 * 
 * Fonctions :
 * - addTask : fonction appelée lorsque l'utilisateur ajoute une tâche. Elle génère un id aléatoire pour la nouvelle tâche et l'ajoute à la liste des tâches.
 * - editTask : fonction appelée lorsque l'utilisateur édite une tâche. Elle met à jour la tâche dans la liste en utilisant l'id de la tâche éditée.
 * - deleteTask : fonction appelée lorsque l'utilisateur supprime une tâche. Elle filtre la liste des tâches pour ne garder que les tâches dont l'id est différent de celui de la tâche à supprimer.
 * 
 * --------------------------------------------------
 * 
 * Puis exportation du composant App.
 */

import React, { useState } from 'react'; 
import AddTask from './components/AddTask'; 
import Task from './components/Task';
import EditTask from './components/EditTask';


function App() { 

    const [tasks, setTasks] = useState([ 
        {
            id: 1,
            text: 'Faire les courses',
        },
        {
            id: 2,
            text: 'Jouer à la play',
        },
        {
            id: 3,
            text: 'Sortir le chien',
        },
    ]);

    const addTask = (task) => { 
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const [editing, setEditing] = useState(false);
    const editTask = (editedTask) => {
        setTasks(tasks.map((task) => (task.id === editedTask.id ? editedTask : task)));
        setEditing(false);
    };

    const deleteTask = (id) => { 
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return ( 
        <div className='container'>

            <header className='header'>
                <h1>Ma To-Do List</h1>
                <AddTask onAdd={addTask} /> 
            </header>

            {tasks.length > 0 ? (

                <div className='tasks'>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
                    ))}
                </div>

            ) : ( 

                <p className='no-tasks'>Pas de tâche</p>

            )}

        </div>
    );
}

export default App; 
