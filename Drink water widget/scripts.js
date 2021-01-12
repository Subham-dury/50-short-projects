const smallcups = document.querySelectorAll('.cup-small')
const quantity = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')

updatebigcup()

smallcups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))

})

function highlightCups(idx) {

  if (idx===smallcups.length-1 && smallcups[idx].classList.contains("filled")) idx--;
    if(smallcups[idx].classList.contains('filled') && !smallcups[idx].nextElementSibling.classList.contains('filled')) {
        idx--
    }

  smallcups.forEach((cup, idx2) => {
    if(idx2 <= idx){
      cup.classList.add('filled')
    }
    else {
      cup.classList.remove('filled')
    }
  })

  updatebigcup()
}

function updatebigcup() {
  const filledcups = document.querySelectorAll('.cup-small.filled').length
  
  const total = smallcups.length

  if(filledcups === 0)
  {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  }
  else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${filledcups / total * 250}px`
    percentage.innerText = `${filledcups/total * 100}%`
  }
  
  if(filledcups === total){
    remaining.style.visibility = 'hidden'
    remaining.style.height = 0
  }
  else{
    remaining.style.visibility = 'visible'
    quantity.innerText = `${2-(250 * filledcups / 1000)}L `
  }

}