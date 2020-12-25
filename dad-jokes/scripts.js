const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJokes()
jokeBtn.addEventListener('click', generateJokes)

function generateJokes() {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json',
    },
  }).then((res) => res.json())
  .then((data) => {
    jokeEl.innerHTML = data.joke
  })
}
