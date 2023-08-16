const totalQuantity = document.querySelector('.total-quantity')
const totalPrice = document.querySelector('.total-price')
const div = document.querySelector("#target");
const ascBtn = document.querySelector("#sort-by-asc")
const descBtn = document.querySelector("#sort-by-desc")
const inputs = document.querySelectorAll("input")
const addBtn = document.querySelector("#btn-add")
const message = document.querySelector("#message")

const cartItems = [
  { name: "Apple", price: 120, quantity: 3 },
  { name: "Banana", price: 50, quantity: 5 },
 /* { name: "Orange", price: 6, quantity: 2 },
  { name: "PineApple", price: 2, quantity: 2 },
  { name: "Coconut", price: 90, quantity: 2 },
  { name: "Peach", price: 45, quantity: 2 },
  { name: "Mango", price: 70, quantity: 4 },
  { name: "Grapes", price: 30, quantity: 3 },
  { name: "Watermelon", price: 120, quantity: 1 },
  { name: "Cherry", price: 80, quantity: 2 },
  { name: "Pear", price: 55, quantity: 3 },
  { name: "Kiwi", price: 60, quantity: 2 },
  { name: "Strawberry", price: 40, quantity: 5 },
  { name: "Blueberry", price: 75, quantity: 2 },
  { name: "Raspberry", price: 90, quantity: 3 },
  { name: "Pomegranate", price: 100, quantity: 1 },
  { name: "Blackberry", price: 55, quantity: 4 },
  { name: "Apricot", price: 35, quantity: 3 },
  { name: "Plum", price: 30, quantity: 2 },
  { name: "Lemon", price: 10, quantity: 5 },
  { name: "Lime", price: 15, quantity: 2 },
  { name: "Cantaloupe", price: 80, quantity: 1 },
  { name: "Honeydew", price: 70, quantity: 2 },
  { name: "Fig", price: 50, quantity: 3 },
  { name: "Guava", price: 65, quantity: 2 },*/
];

//-----------------------------Имя с большой буквы---------------------------------

//-----------------------------Добавляем ID----------------------------------------
let arrID = [];
function getID(arr) {
  arrID = arr.map((el) => ({ ...el, ID: (Math.random() * 10000).toFixed() }));
}
getID(cartItems);

//----------------------------Рендерим карточки------------------------------------
function renderCard(arr, target) { 
  getTotalQuantity(arrID)
  getTotalPrice(arrID)
  target.innerHTML = ''
  message.innerText = null
  const card = arr.map(
    (item, i) =>
      (target.innerHTML += `<div class = 'product-card'><h2> Product #${
        i + 1
      }  ${item.name}</h2><div class = 'product-descr'><p> ID: ${
        item.ID
      }</p><p> Price: ${item.price} btc</p><span> Quantity: ${
        item.quantity
      } kg</span><img src="./buy.png" alt="buy" class = 'buy-img'></div></div>`)
  );
  
}

renderCard(arrID, div);

//-----------------------------Функция сортировки по возрастанию цены---------------------
let sortedAsc = []
function sortArrayAscend(arr){
sortedAsc = arr.sort((a, b) => a.price - b.price);
}

//-----------------------------Функция сортировки по убыванию цены------------------------
let sortedDesc = []
function sortArrayDesc(arr){
sortedDesc = arr.sort((a, b) => b.price - a.price);
}

//----------------------------Вешаем на кнопку сортировку---------------------------------
ascBtn.addEventListener('click', ()=> {
  sortArrayAscend(arrID)
  renderCard(sortedAsc, div);
})

//----------------------------Вешаем на кнопку сортировку---------------------------------
descBtn.addEventListener('click', ()=> {
  sortArrayDesc(arrID)
  renderCard(sortedDesc, div);
})

//---------------------Проверка полей инпута--------------------------------------------
function checkInputs(arr){
    arr[0].value === '' || arr[1].value === '' || arr[2].value === '' ? message.innerText = 'Все поля обязательны к заполнению!'
    : addNewProd()
  }


//---------------------Добавить новый товар---------------------------------------------
function addNewProd(){ const newProduct = {};
  for (let i = 0; i < inputs.length; i++) {
    newProduct[`${inputs[i].className}`] = inputs[i].value;
    inputs[i].value = ''
    
  }
  cartItems.push(newProduct)
  getID(cartItems);
  renderCard(arrID, div)
  }

addBtn.addEventListener("click", () => {
  checkInputs(inputs)
});

//-------------------Счетчики товаров и цен--------------------------------------------------
function getTotalPrice(arr){
  let totalPriceValue = arr.reduce((sum, elem) => sum + (elem.price * elem.quantity), 0)
  totalPrice.innerText = `Общая стоимость товаров на складе : ${totalPriceValue} btc` 
}

function getTotalQuantity(arr){
  let totalQuantityValue = arr.reduce((sum, elem) => sum + (elem.quantity * 1), 0)
  totalQuantity.innerText = `Обще количество товаров на складе : ${totalQuantityValue} кг` 
}

//----------------------------------------------------------------------------------------------------------

/*const cartItemss = [
  { name: "Apple", price: 120, quantity: 3 },
  { name: "Banana", price: 50, quantity: 5 },
  { name: "Orange", price: 6, quantity: 2 },
  { name: "PineApple", price: 2, quantity: 2 },
  { name: "Coconut", price: 90, quantity: 2 },
  { name: "Peach", price: 45, quantity: 2 },
  { name: "Mango", price: 70, quantity: 4 },
  { name: "Grapes", price: 30, quantity: 3 },
  { name: "Watermelon", price: 120, quantity: 1 },
  { name: "Cherry", price: 80, quantity: 2 },
  { name: "Pear", price: 55, quantity: 3 },
  { name: "Kiwi", price: 60, quantity: 2 },
  { name: "Strawberry", price: 40, quantity: 5 },
  { name: "Blueberry", price: 75, quantity: 2 },
  { name: "Raspberry", price: 90, quantity: 3 },
  { name: "Pomegranate", price: 100, quantity: 1 },
  { name: "Blackberry", price: 55, quantity: 4 },
  { name: "Apricot", price: 35, quantity: 3 },
  { name: "Plum", price: 30, quantity: 2 },
  { name: "Lemon", price: 10, quantity: 5 },
  { name: "Lime", price: 15, quantity: 2 },
  { name: "Cantaloupe", price: 80, quantity: 1 },
  { name: "Honeydew", price: 70, quantity: 2 },
  { name: "Fig", price: 50, quantity: 3 },
  { name: "Guava", price: 65, quantity: 2 },
];

const jsonObj = JSON.stringify(cartItemss)
console.log(jsonObj)
const obj = JSON.parse(jsonObj)
console.log(obj)
*/