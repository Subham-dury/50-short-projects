const btn = document.querySelectorAll('.ripple')


btn.forEach(button => {
  button.addEventListener('click', function(e)  {
    const x = e.clientX
    const y = e.clientY

    

    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft

    

    const insideLeft = x - btnLeft
    const insideTop = y - btnTop

    

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.left = insideLeft + 'px'
    circle.style.top = insideTop + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})