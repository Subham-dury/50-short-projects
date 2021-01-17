const body = document.body
const slides = document.querySelectorAll('.slide')
const butnleft = document.getElementById('left')
const butnright = document.getElementById('right')

let activeslideindex = 0

setbackground()
function setbackground () {
  body.style.backgroundImage = slides[activeslideindex].style.backgroundImage
}

function toggleactiveslide () {
  slides.forEach(slide => {
    slide.classList.remove('active')

    slides[activeslideindex].classList.add('active')
  });
}

butnleft.addEventListener('click', () => {
  activeslideindex--

  if(activeslideindex < 0) {
    activeslideindex = slides.length - 1
  }
  setbackground()
  toggleactiveslide()
})

butnright.addEventListener('click', () => {
  activeslideindex++

  if(activeslideindex > slides.length - 1) {
    activeslideindex = 0
  }
  setbackground()
  toggleactiveslide()
})