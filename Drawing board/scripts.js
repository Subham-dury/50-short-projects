const canvas = document.getElementById('canvas');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const clear = document.getElementById('clear');
const sizebtn = document.getElementById('size');
const colorbtn = document.getElementById('color');
const ctx = canvas.getContext('2d');



let x1
let y1
let mousedown = false
let color = 'black'
let size = 10

canvas.addEventListener('mousedown', (e) => {
  mousedown = true

  x1=e.offsetX
  y1=e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  mousedown = false

  x1=undefined
  y1=undefined
})


canvas.addEventListener('mousemove', (e) => {
  if(mousedown){
    const x2 = e.offsetX
  const y2=e.offsetY

  drawCircle(x2, y2)
  drawLines(x1,y1,x2,y2)

  x1= x2
  y1 = y2
  
  }

  
  
})


function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color
  ctx.fill()
}


function drawLines(x1,y1,x2,y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeBtn() {
  sizebtn.innerText = size
}

colorbtn.addEventListener('change' , (e) => {
  color = e.target.value
})

increase.addEventListener('click', (e) => {
  size += 2
  if(size > 30) {
    size = 30
  }

  updateSizeBtn()
})

decrease.addEventListener('click', (e) => {
  size -= 2
  if(size < 2) {
    size = 2
  }

  updateSizeBtn()
})

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))



