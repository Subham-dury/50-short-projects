const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated')
const animated_text = document.querySelectorAll('.animated-text')

function getData() {
  header.innerHTML = '<img src="https://c4.wallpaperflare.com/wallpaper/990/547/605/digital-art-futuristic-city-car-artwork-wallpaper-preview.jpg" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, impedit neque.'
  profile.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User image"/>'
  name.innerHTML = 'Richer Bell'
  date.innerHTML = 'Jan 21, 2021'

  animated_bgs.forEach(bg => bg.classList.remove('animated'))
  animated_text.forEach(bg => bg.classList.remove('animated-text'))
}

setTimeout(getData,2500)