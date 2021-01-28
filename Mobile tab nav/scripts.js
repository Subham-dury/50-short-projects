const contents = document.querySelectorAll('.content')
const items = document.querySelectorAll('nav ul li')

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    hideAll();

    item.classList.add('active')
    contents[index].classList.add('show')

  })
})

function hideAll() {
  contents.forEach(content => content.classList.remove('show'))
  items.forEach(item => item.classList.remove('active'))
}