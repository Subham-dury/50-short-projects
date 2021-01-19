const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const timing = document.querySelector('.time')
const dates = document.querySelector('.date')
const btn = document.querySelector('.toggle')
const html = document.querySelector('html')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

btn.addEventListener('click' , () => {
  if(html.classList.contains('dark')){
    html.classList.remove('dark')
    btn.innerHTML = 'Dark Mode'
  }
  else{
    html.classList.add('dark')
    btn.innerHTML = 'Light Mode'
  }
})


function setTime() {
  const time = new Date();
  
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours>=12 ? 'PM' : 'AM'

  hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timing.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

  dates.innerHTML = `${days[day]}, ${months[month]} <span class = "rotate">${date}</span>`
  
}
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;}


setTime()

setInterval(setTime, 1000)
