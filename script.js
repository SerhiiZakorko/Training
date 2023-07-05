/*

let text = document.querySelector(".text")
//text.style.color = "brown"

let link = document.querySelector("link") //применили стиль класса из css для парагрфа
link.setAttribute("href","style.css")
text.setAttribute("class", "info")

*/

/*

const body = document.querySelector("body");  //создаем новые теги
const main = document.createElement("div");
const info = document.createElement("p");

body.append(main, info);
info.innerText = "Your element is: ";

const element = prompt("Enter your element: ");

if (element === "p" || element === "a") {
  const text = prompt("text: p");
}

const result = document.createElement(element);

body.prepend(result);

info.innerText += result.nodeName;

*/