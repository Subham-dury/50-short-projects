const openbtn = document.querySelector('.open-btn')
const closebtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openbtn.addEventListener('click', () => {
  nav.forEach(navel => {
    navel.classList.add('visible')
  })
})
closebtn.addEventListener('click', () => {
  nav.forEach(navel => {
    navel.classList.remove('visible')
  })
})