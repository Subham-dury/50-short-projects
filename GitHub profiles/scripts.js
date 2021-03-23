const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


const baseurl ='https://api.github.com/users/'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value
  if(user) {
    getuser(user)
    search.value = ''
  }


})

async function getuser(username) {
  try {
    const { data } = await axios(baseurl + username)
    createcard(data)
    getRepos(username)
  }
  catch(error) {
    if(error.response.status == 404){
      createError("Sorry !!!  Can't find user with this name :( ")
    }
    
  }
}

async function getRepos(user) {
  try {
    const { data } = await axios(baseurl + user + '/repos?sort=created')
    addrepos(data)
  }
  catch(error) {
    if(error.response.status == 404){
      createError("Sorry !!!  Can't load the repos :( ")
    }
    
  }
}



function createcard(user) {
  const profile = `
  <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="user-img">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos" class="repos">
      </div>
    </div>
  </div>
  `

  main.innerHTML = profile
}

function addrepos(repos) {
  const reposel = document.getElementById('repos')

  repos.slice(0, 5).forEach(repo => {
    const repolink = document.createElement('a')
    repolink.classList.add('repo')
    repolink.href = repo.html_url
    repolink.target = '_blank'
    repolink.innerText = repo.name
    
    reposel.appendChild(repolink)
  })
  
}

function createError(message) {
  const errorcard = `
  <div class="card">
    <h1>${message}</h1>
  </div>
  `
  main.innerHTML = errorcard
}