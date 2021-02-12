const output = document.getElementById('output')
const passlen = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const number = document.getElementById('number')
const special = document.getElementById('special')
const generatebtn = document.getElementById('generate')
const clipboardbtn = document.getElementById('clipboard')

const randomFunction = {
  lower: generateRandomLower,
  upper: generateRandomUpper,
  number: generateRandomNumber,
  symbol: generateSpecialChar
}

clipboardbtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = output.innerText
  
  if(!password) {
    return
  }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password has been copied to clipboard !!! :)')
})

generatebtn.addEventListener('click', () => {
  const len = +passlen.value
  const uppercaseSelect = uppercase.checked
  const lowercaseSelect = lowercase.checked
  const numberSelect = number.checked
  const specialSelect = special.checked
  output.innerText = createPassword(len,lowercaseSelect,uppercaseSelect,numberSelect,specialSelect)
})

function createPassword(length,lower,upper,number,symbol) {
  let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        alert('The password with your desired format cannot be generated !!! :(')
        return ''
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(() => {
            const any = typesArr[Math.floor(Math.random()* typesArr.length)]
            console.log(any)
            
            const funcName = Object.keys(any)[0]
            
            generatedPassword += randomFunction[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}




function generateRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function generateRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function generateRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function generateSpecialChar() {
  const symbols = '!@#$%^&*?.:'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

