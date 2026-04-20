import React, { createContext, useEffect, useState } from "react";

 export interface Task{
    title: string;
    done: boolean;
    id: number;
}

interface TaskContextData{
    tasks : Task[],
    setTasks : React.Dispatch<React.SetStateAction<Task[]>>
}

export const TaskContext = createContext({} as TaskContextData)
 
interface TasksProviderProps{
    children: React.ReactNode
}



export const TasksProvider : React.FC<TasksProviderProps> = ({children}) => {
        const [tasks, setTasks] = useState([] as Task [])
         //Buscando no localStorage
        useEffect(()=> {
        const tasksOnLocalStorage = localStorage.getItem('tasks')

        if(tasksOnLocalStorage) {
           setTasks(JSON.parse(tasksOnLocalStorage))
        }
    }, [])

    return(
        <TaskContext value={{
            tasks,
            setTasks
        }}>
            {children}
        </TaskContext>
    )
}