const slider = document.querySelector('.slider-container')
const slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false
let startPos = 0
let CurrentTranslate = 0
let PrevTranslate = 0
let animationId = 0
let currentIndex = 0

slides.forEach((slide, index)  => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e)=>{
    e.preventDefault()
  })

  //Touch 
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)
  


  //Mouse event
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

//Disable context menu
window.oncontextmenu = function(event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    animationId = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationId)

  const movedBy = CurrentTranslate - PrevTranslate

  if (movedBy < -100 && currentIndex < slides.length-1) {
    currentIndex += 1
  }
  if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1
  }

  setPositionByIndex()
  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event) 
    CurrentTranslate = PrevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosi()
  if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosi() {
  slider.style.transform = `translateX(${CurrentTranslate}px)`

}

function setPositionByIndex() {
  CurrentTranslate = currentIndex * -window.innerWidth
  PrevTranslate = CurrentTranslate
  setSliderPosi()
}