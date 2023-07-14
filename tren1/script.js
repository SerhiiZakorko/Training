/*const box = document.querySelector("#main")
box.addEventListener("click", () => {
    console.log("it was clicked")
})

box.addEventListener('dblclick',  () => {
    console.log("it was clicked")
})*/
/*const body = document.querySelector('body')
const btn = document.createElement('button')
body.append(btn)
btn.innerText = "click me"

btn.addEventListener('click', () => {
const box = document.createElement('div')
box.style.backgroundColor = 'red'
box.style.width = '200px'
box.style.height = '200px'
box.style.marginBottom = '10px'
body.append(box)
})*/

/*const myInput = document.querySelector('.info')
const myButton = document.querySelector('button')
const myText = document.querySelector('p')

myButton.addEventListener('click', () => {
    let text = myInput.value
    myText.innerText += ' ' + text
})*/

const name = document.querySelector('#name')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const phone = document.querySelector('#phone')
const btn = document.querySelector('button')
const info = document.querySelector('#info')

btn.addEventListener('click', () => {
    let object = {
        userName : name.value,
        userLastName : lastname.value,
        userEmail : email.value,
        userPassword : password.value,
        userPhone : phone.value
    }
    console.log(object)

    info.innerText += ` user Name:   ${object.userName}
    ` 
    info.innerText += `user Lastname: ${object.userLastName}
    `
    info.innerText += `user Email: ${object.userEmail}
    `
    info.innerText += `user Password: ${object.userPassword}
    `
    info.innerText += `user Phone: ${object.userPhone}
    `
})