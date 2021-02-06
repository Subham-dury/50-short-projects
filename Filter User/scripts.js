const userlist = document.getElementById('user-list')
const filter = document.getElementById('filter')
const listitems = []

filter.addEventListener('input', (e) => filterData(e.target.value))


async function getdata() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const data = await res.json()
  
  userlist.innerHTML = ''
  const results = data.results
  
  results.forEach(user => {
    const li = document.createElement('li')
    listitems.push(li)

    li.innerHTML
    = `<img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>`
    userlist.appendChild(li)


  })
}

function filterData(searchTerm) {
  listitems.forEach(item => {
      if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
          item.classList.remove('hide')
      } else {
          item.classList.add('hide')
      }
  })
}

getdata()