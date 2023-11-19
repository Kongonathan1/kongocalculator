const numberButtons = document.querySelector('.buttons').querySelectorAll('.number input')
const display = document.querySelector('.display input')
const AC = document.querySelector('#ac')
const DEL = document.querySelector('#del')
const disvision = document.querySelector('#division')
const virgule = document.querySelector('#virgule')
const equal = document.querySelector('.equal')

AC.addEventListener('click', () => {
    display.value = ''
})
DEL.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1)
})

disvision.addEventListener('click', () => {
    if(disvision.value !== '=' ) {
        display.value += disvision.value
    }
})
virgule.addEventListener('click', () => {
    if(virgule.value !== '=' ) {
        display.value += virgule.value
    }
})

equal.addEventListener('click', () => {
    display.value = eval(display.value)
})

numberButtons.forEach( b => {
    b.addEventListener('click', () => {
        if(b.value !== '=' ) {
            display.value += b.value
        }
    })
})
