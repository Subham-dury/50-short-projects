const boxes = document.getElementById('boxes')
const btn = document.getElementById('btn')

function createBoxes() {
  for(let i = 0; i < 4; i++)
  {
    for(let j = 0; j < 4; j++)
    {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 105}px ${-i * 105}px`
      boxes.appendChild(box)
    }
  }
}

btn.addEventListener('click', () => boxes.classList.toggle('big'))

createBoxes()

