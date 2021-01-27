const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.getElementById('replay')

runAnimtion()

function resetDOM() {
  counter.classList.remove('hide')
  final.classList.remove('show')

  nums.forEach((num) => {
    num.classList.value=''
  })

  nums[0].classList.add('In')
}

function runAnimtion() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    num.addEventListener('animationend', (e) => {
      if(e.animationName === 'In' && idx !== nextToLast) {
        num.classList.remove('In')
        num.classList.add('Out')
      }
      else if(e.animationName === 'Out' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('In')
        
      }
      else {
        counter.classList.add('hide')
        final.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimtion()
})