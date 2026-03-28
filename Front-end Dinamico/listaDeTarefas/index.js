// * Sempre começar pegando todos os elemntos que vão ser usados

// Pegando os elementos do DOM
const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const button = document.querySelector('#add-task-button');
const todoListUl = document.querySelector('#todo-list');

let tasks = []; // Array para armazenar as tarefas

// Lidando com eventos 
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)
    const taskTitle = taskTitleInput.value

    if(taskTitle.length <3){
        alert('A tarefa deve conter pelo menos 3 caracteres.');
        return;
    }
    
    // Adicionando a nova tarefa ao array de tarefas
    tasks.push(taskTitle); // Adiciona a nova tarefa ao array

    //Adicionando a nova tarefa no HTML
    const li = document.createElement('li'); 
    li.textContent = taskTitle; // <li> tarefa 2 </li>
    todoListUl.appendChild(li)

    taskTitleInput.value = ''; 
});