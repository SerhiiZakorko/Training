const display = document.querySelector(".display-text")
const buttons = document.querySelectorAll(".num-btn")
const mathBtns = document.querySelectorAll(".math-keys")

  

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        const displayText = event.target.id
        display.innerHTML += `${displayText}`

        let dispString = display.textContent
        let leng = dispString.match(/[0-9.]/g).length // подсчет символов [указаных в скобках] в строке
        console.log(leng)
        if (leng >= 12){
            console.log("хватит")
            display.innerHTML = ``
        }
    })
})



mathBtns.forEach(function (mathBtn) {
    mathBtn.addEventListener("click", function (event) {
        const displayText = event.target.textContent
        display.innerHTML += `${displayText}`
    })
})

function clear() {
    display.innerHTML = ""
}

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", function () {
    clear()
})
const resultBtn = document.querySelector("#result")
resultBtn.addEventListener("click", function () {
    let preResult = display.textContent
    const result = eval(preResult)
    clear()
    display.innerHTML = `${result}`
    //setTimeout(function(){clear()},1500)

})


// добавить работу процентов и переделать очистку экрана после выполнения операции.
// добавить мигающий курсор