const task = document.querySelector('.todolist__input')
const addTask = document.querySelector('.btn--add')
const ul = document.querySelector('.todolist__tasks')


const tasks = [
    'Estudar JavaScript',
    'Estudar React'
]

addTask.addEventListener("click", function(){
    tasks.push(task.value)
    console.log(`${tasks}`)
})

const li = tasks.map(task => {
    const liMarkup = `
        <li class="todolist__tasks-group">
            <input type="checkbox" name="${task.replace(" ", "").toLowerCase()}" id="${task.replace(" ", "").toLowerCase()}">
            <label for="${task.replace(" ", "").toLowerCase()}"><span>${task}</span></label>
            <button class="btn btn--remove">X</button>
        </li>
    `

    return liMarkup
})

ul.innerHTML = li.join("")






