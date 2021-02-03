const form = document.getElementById('form')
const input = document.getElementById('input')
const todosList = document.getElementById('todos')

const todosArray = JSON.parse(localStorage.getItem('todosArray'))

if(todosArray) {
  todosArray.forEach(todo => insertTodo(todo))
}


form.addEventListener('submit', (e) => {
  e.preventDefault()

  insertTodo()
})

function insertTodo(todo) {
  let text = input.value
  

  if(todo) {
    text = todo.text
  }

  if(text) {
    const todoel = document.createElement('li')
    if(todo && todo.completed) {
      todoel.classList.add('completed')
    }

    todoel.innerText = text

    todoel.addEventListener('click', () => {
      todoel.classList.toggle('completed')
      updateLocalStorage()
    })

    todoel.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoel.remove()
      updateLocalStorage()
      
    })
    

    todosList.appendChild(todoel)
    input.value = ''

    updateLocalStorage()
  }

}

function updateLocalStorage() {
  todosel = document.querySelectorAll('li')

  const todosArray = []

  todosel.forEach(todoel => {
    todosArray.push({
      text: todoel.innerText,
      completed: todoel.classList.contains('completed')
    })
  })

  localStorage.setItem('todosArray', JSON.stringify(todosArray))
}