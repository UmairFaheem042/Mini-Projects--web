const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')

let count = 0

function increment(){
    const counterElement = document.getElementById('counter')
    count++
    counterElement.innerText = count
}

function decrement(){
    const counterElement = document.getElementById('counter')
    count--
    counterElement.innerText = count
}

function reset(){
    const counterElement = document.getElementById('counter')
    count = 0
    counterElement.innerText = count
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
resetBtn.addEventListener('click', reset)