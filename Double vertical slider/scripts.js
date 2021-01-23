const slidercontainer = document.querySelector('.slider-container')
const rightslide = document.querySelector('.right-slide')
const leftslide = document.querySelector('.left-slide')
const upbutton = document.querySelector('.up-button')
const downbutton = document.querySelector('.down-button')
const slideLength = rightslide.querySelectorAll('div').length

let activeslideindex = 0

leftslide.style.top = `-${(slideLength - 1) * 100}vh`

upbutton.addEventListener('click', () => changeSlides('up'))
downbutton.addEventListener('click', () => changeSlides('down'))

function changeSlides  (direction) {
    const sliderHeight = slidercontainer.clientHeight
    
    if(direction === 'up'){
        activeslideindex++
        if(activeslideindex > slideLength - 1){
            activeslideindex = 0
        }
    }
    if(direction === 'down'){
        activeslideindex--
        if(activeslideindex < 0){
            activeslideindex = slideLength - 1
        }
    }

rightslide.style.transform = `translateY(-${activeslideindex * sliderHeight}px)`
leftslide.style.transform = `translateY(${activeslideindex * sliderHeight}px)`
}