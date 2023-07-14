function start_game() {
    object.classList.toggle("start")
    document.title = "Score: 0"
    score = 0
}
function miss(event) {
    if (event.target.id == "area") {
        score = score - 1
        document.title = `Score: ${score}`
        if (score <= 0) {
            function finishGame() {
                gameOwer.currentTime = 0
               gameOwer.play()
               start_game()
               alert(`Вы проиграли. Количестово балов: ${score}`)               
            }
            finishGame()
        }        
    }
    missSound.currentTime = 0
    missSound.play()
}
function click_object() {
    score = score + 1
    document.title = `Score: ${score}`
    object.classList.remove("start")
    void object.offsetWidth // обновляет страницу после первого применения класса и до второго применения
    object.classList.add("start")
    let random_offset = Math.floor/*Округление до целого числа*/(Math.random()/*Генерация случайного числа, от 0 до 1*/ * 440)
    object.style.left = `${random_offset}px`
    hitSound.currentTime = 0
    hitSound.play()
}

let score = 0
let object = document.querySelector("#object")
const hitSound = new Audio(`sounds/hit.wav`)
const missSound = new Audio(`sounds/miss.wav`)
const gameOwer = new Audio(`sounds/game-ower.wav`)
