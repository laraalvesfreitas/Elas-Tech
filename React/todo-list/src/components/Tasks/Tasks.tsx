import React, { SubmitEvent, useContext, useState } from "react"
import styles from './style.module.scss'
import { TaskContext } from "../../context/TaskContext";


export const  Tasks:  React.FC = () => {
    const [taskTitle, setTaskTitle] = useState('')

    const {tasks, setTasks} = useContext(TaskContext)

// Função disparada quando o usuário está querendo adicionar uma nova tarefa
    function handleSubmitAddTask(event: SubmitEvent){
        event.preventDefault()
        if(taskTitle.length  < 3){
            alert ('Não é possivel adicionar uma tarefa com menos de 3 caracteres.')
            return;
        }

        // Adiciona a tarefa
        const newTasks = [...tasks,{id:new Date().getTime(), title: taskTitle, done: false},
        ]
        setTasks(newTasks)

        // Adicionando no localStorage
        localStorage.setItem('tasks', JSON.stringify(newTasks))

        setTaskTitle('')

    }
   
    function handleToggleTaskStatus(taskId : number){
        const newTasks = tasks.map((task) =>{
            if(taskId === task.id){
                return{
                ...task,
                done: !task.done
                }
            }
          
            return task
        });

        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))

    }

    

    //Utilizar o filter para remover a tarefa do array de tarefas
    function handleRemoveTask(taskId : number){
            const newTasks = tasks.filter((task) => taskId !== task.id);
            setTasks(newTasks)

            console.log('Tarefa removida')

            localStorage.setItem('tasks', JSON.stringify(newTasks))

        };
    


    return(
        <section className={styles.container}>

        <form onSubmit={handleSubmitAddTask}>
            <div>
                <label htmlFor="task-title">Nova Tarefa</label>
                <input value={taskTitle}  onChange={(event) => setTaskTitle(event.target.value)}
                type="text"  
                id="task-title" 
                placeholder="Título da Tarefa"/>
            </div>

            <button type="submit">Adicionar Tarefa</button>

        </form>

        <ul>
            {tasks.map(task => {
                return(
                    <li key={task.id}>
                        <input type="checkbox" id={`task-${task.id}`} onChange={() => {handleToggleTaskStatus(task.id)}}  />
                        <label className={task.done ? styles.done : ''} htmlFor={`task-${task.id}`}>{task.title}</label>
                    
                        <button onClick={() =>{handleRemoveTask(task.id)}} >Remover</button>

                    </li>
                )
            })}
           
            
        </ul>

        </section>
    )
}