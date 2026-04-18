import React from "react"
import styles from './style.module.scss'

export const  Tasks:  React.FC = () => {
    return(
        <section className={styles.container}>

        <form>
            <div>
                <label htmlFor="task-title">Nova Tarefa</label>
                <input type="text"  id="task-title" placeholder="Título da Tarefa"/>
            </div>

            <button>Adicionar Tarefa</button>

        </form>

        </section>
    )
}