const add = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
  notes.forEach(note => createNewNote(note))
}

add.addEventListener('click', () => {
  createNewNote()
})

function createNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>

  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `

  const edit = note.querySelector('.edit')
  const deletebtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  textArea.value = text
  main.innerHTML = marked(text)

  deletebtn.addEventListener('click', () => {
    note.remove()
    updateLocal()
  })

  edit.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = marked(value)

    updateLocal()
  })

  document.body.appendChild(note)
}

function updateLocal() {
  const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
  
}