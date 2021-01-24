const btn = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One','Message Two','Message Three','Message Four','Message Five',
]

const types = ['success','error','info']

btn.addEventListener('click', () =>  {
  addNotification()
})

function addNotification (message = null, type = null) {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add(type ? type : getrandomtype())
  
  
  toast.innerText = message ? message : getrandomessage()
  toasts.appendChild(toast)

  setTimeout(() => {
    toast.remove()}
, 2000)
}

function getrandomessage () {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getrandomtype () {
  return types[Math.floor(Math.random() * types.length)]
}