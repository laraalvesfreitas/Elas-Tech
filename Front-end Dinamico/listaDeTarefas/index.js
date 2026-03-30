// * Sempre começar pegando todos os elemntos que vão ser usados

// Pegando os elementos do DOM
const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const button = document.querySelector('#add-task-button');
const todoListUl = document.querySelector('#todo-list');

let tasks = []; // [{title: 'Tarefa 1', done: false}, {title: 'Tarefa 2', done: true}]

// Lidando com eventos 
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)
    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 3) {
        alert('A tarefa deve conter pelo menos 3 caracteres.');
        return;
    }

    // Adicionando a nova tarefa ao array de tarefas
    tasks.push({
        title: taskTitle,
        done: false
    }); // Adiciona a nova tarefa ao objeto de tarefas


    //Adicionando a nova tarefa no HTML
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox'); // Atribuindo o tipo checkbox ao input
    
    input.addEventListener('change', (event) => {
        const liToggle = event.target.parentElement; 

        const spanToToggle = liToggle.querySelector('span'); // Obtendo o elemento <span> dentro do <li> para alterar o estilo

        const done = event.target.checked; // Verificando se o checkbox está marcado ou não
        if(done){
            liToggle.style.textDecoration = 'line-through'; // Se estiver marcado, risca o texto da tarefa
        }else{
            liToggle.style.textDecoration = 'none'; // Se não estiver marcado, remove o risco do texto da tarefa
        }

        tasks = tasks.map(t => {
            if(t.title === spanToToggle.textContent){
                return {
                    title : t.title,
                    done : !t.done,
            }
            }

            return t;

    });

    console.log(tasks);

});

    const span = document.createElement('span');
    span.textContent = taskTitle; // Definindo o texto do span como o título da tarefa

    const button = document.createElement('button');
    button.textContent = 'Remover'; // Definindo o texto do botão como "Remover"
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement; // Obtendo o elemento <li> pai do botão clicado

        const titleToRemove = liToRemove.querySelector('span').textContent; // Obtendo o título da tarefa a ser removida

        tasks = tasks.filter(t => t.title !== titleToRemove);

        todoListUl.removeChild(liToRemove); // Removendo a tarefa do HTML


        console.log(tasks);
    });


    //Criando no HTML 
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    

    todoListUl.appendChild(li); // Adicionando a nova tarefa à lista no HTML

    taskTitleInput.value = '';

});