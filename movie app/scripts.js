const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62004e3f486b6a03f87ef4b888004470&page=1'

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=62004e3f486b6a03f87ef4b888004470&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const button = document.getElementById('btn')
const mainpart = document.getElementById('mainpart')

getmovies(API_URL)

async function getmovies(url) {
  const response = await fetch(url)
  const data = await response.json()

  addmovies(data.results)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const search_term = search.value

  if(search_term && search_term !== '') {
    getmovies(SEARCH_URL + search_term)
    search.value = ''
    


  }
  else{
    window.location.reload()
  }
})

function addmovies(movies) {
  mainpart.innerHTML = ''

  movies.forEach((movie) => {
    const {title, poster_path, vote_average, overview} = movie

    const moviele = document.createElement('div')
    moviele.classList.add('movie')

    moviele.innerHTML = `
    
      <img src="${IMAGE_PATH + poster_path}" alt="${title}">
      <div class="info">
        <h3>${title}</h3>
        <span class="${getrating(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    
    `
    mainpart.appendChild(moviele)
  })
}

function getrating(vote_average) {
  if(vote_average >=8){
    return 'green rating'
  }
  else if(vote_average >=5) {
    return 'orange rating'
  }
  else {
    return 'red rating'
  }
}

