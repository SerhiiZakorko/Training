function toggleRotate(){
    const target = document.querySelector('.round');
    target.classList.toggle('round-rot');
    changeText();
    toggleButton()
    rotate.play()
}
function toggleButton(){
    button.classList.toggle('button-none');
}

function changeText(){
    const text = document.querySelector('h1')
    const delite = document.querySelector('.delete')
    text.innerText = 'Поздравляем! Ваш сайтраскручен!'
    delite.innerText = ''
}
const rotate = new Audio(`rotate-sound.mp3`)
const button = document.querySelector('button')
button.addEventListener('click', event => toggleRotate(),)