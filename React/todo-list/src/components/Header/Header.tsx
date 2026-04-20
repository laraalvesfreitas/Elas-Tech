import { useContext } from 'react'
import { StatsCard } from '../StatsCard/StatsCard'
import styles from'./styles.module.scss'
import { TaskContext } from '../../context/TaskContext'

export const Header: React.FC = () => {

    const {tasks} = useContext(TaskContext)


    const totalTasks = tasks.length;
    const totalPending = tasks.reduce((total, task) =>{
        if(!task.done) return total + 1 
        return total
    },0)
    
    const totalDone = totalTasks - totalPending

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>

                    <span>Bem vinda, Lara Alves!</span>
                </div>
            
            
            <div>
                <StatsCard title = 'Total de Tarefas' value={totalTasks}/>
                <StatsCard title = 'Tarefas Pendentes' value={totalPending}/>
                <StatsCard title = 'Tarefas Concluídas' value={totalDone}/>

                
            </div>
            </div>

        </header>
    )
}

