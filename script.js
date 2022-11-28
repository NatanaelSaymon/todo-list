const task = document.querySelector('.todolist__input')
const addTask = document.querySelector('.btn--add')
const ul = document.querySelector('.todolist__tasks')
const deleteTask = document.querySelector('.delete')

//Array que armazena as tarefas
let tasks = []

//Adicionando tarefas no array de tarefas
addTask.addEventListener("click", function(){
    if(task.value === '') {
        alert('Digite uma tarefa')
        return
    } else {
        tasks.push(task.value)
    }
    
    handleShowTasks()
    task.value = ''
    console.log(tasks)
})

//Função reponsavel por criar o elemento li
function handleShowTasks() {
    const li = tasks.map(task => {
        const liMarkup = `
            <li class="todolist__tasks-group">
                <input type="checkbox" name="${task.replace(" ", "").toLowerCase()}" id="${task.replace(" ", "").toLowerCase()}">
                <label for="${task.replace(" ", "").toLowerCase()}">
                    <span>${task}</span>
                </label>
                <button class="btn btn--remove delete">X</button>
            </li>
        `

        return liMarkup
    })

    ul.innerHTML = li.join("")
}

//evento responsavel por remover uma tarefa
ul.addEventListener('click', function(event) { 
    if(event.target.classList.contains('delete')) {
        if(confirm('Deseja realmente apagar?')) {
            
            const li = event.target.parentElement

            let currentTask = li.querySelector('label span')

            currentTask = currentTask.textContent

            let tasksFiltereds = tasks.filter(task => task !== currentTask)

            tasks = tasksFiltereds
            li.remove()

            console.log(tasks)
        }
    }
})


handleShowTasks()










