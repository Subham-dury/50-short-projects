const images = document.getElementById('imgs')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

let index = 0
let interval = setInterval(run,2000)

function run() {
  index++
  increment()
}

function increment() {
  if(index > img.length - 1){
    index = 0
  }
  else if(index < 0){
    index = img.length - 1
  }

  images.style.transform = `translateX(${-index * 670}px`
}

function reserInterval() {
  clearInterval(interval)
  interval = setInterval(run,2000)
}

rightbtn.addEventListener('click', () => {
  index++
  increment()
  resetInterval()
})

leftbtn.addEventListener('click', () => {
  index--
  increment()
  resetInterval()
})