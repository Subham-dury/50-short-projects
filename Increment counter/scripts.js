const counter = document.querySelectorAll('.counter')

counter.forEach(counter => {
  counter.innerText = '0'

  const counterincrease = () => {
    const target = +counter.getAttribute('data-target')
    const s = +counter.innerText
    const plus = target / 150

    if(s < target) {
      counter.innerText = `${Math.round(s + plus)}`
      setTimeout(counterincrease, 1)
    }
    else {
      counter.innerText = target
    }
  }

  counterincrease()
})