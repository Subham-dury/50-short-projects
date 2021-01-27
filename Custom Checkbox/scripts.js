const toggles = document.querySelectorAll('.toggle')
const practical = document.querySelector('#Practical')
const exotic = document.querySelector('#Exotic')
const fast = document.querySelector('#Fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(fast.checked && practical.checked && exotic.checked) {
        if(exotic === theClickedOne) {
            practical.checked = false
        }

        if(practical === theClickedOne) {
            fast.checked = false
        }

        if(fast === theClickedOne) {
            practical.checked = false
        }
    }
}