let menuBtn = document.querySelector("#menuTop");
let menu = document.querySelector("#listMenu");
let quick = document.querySelectorAll("#trenQuick");
let quickView = document.querySelector("#quickView");
let closeQuick = document.querySelector("#closeQuick");
let quickImg = document.querySelector("#quickImage img");
let quickName = document.querySelector("#nameQuick");
let quickPrice = document.querySelector("#priceQuick");
let cart = document.querySelector('#cart')
let exitCart = document.querySelector('#exitCart')
let cartPro = document.querySelectorAll('.fa-cart-arrow-down')

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
// show nhanh product
quick.forEach(function (e) {
  e.addEventListener("click", function (ele) {
    let list = ele.target.parentElement.parentElement;
    let listImage = list.querySelector("img");
    let listName = list.querySelector("h3");
    let listPrice = list.querySelector("p span");
    quickImg.src = listImage.src;
    quickName.innerHTML = listName.innerHTML;
    quickPrice.innerHTML = listPrice.innerHTML;
    quickView.style.transform = "scale(1)";
  });
});
// close quick product
closeQuick.addEventListener("click", function () {
  quickView.style.transform = "scale(0)";
});
// close cart
exitCart.addEventListener('click', () => {
  cart.style.right = '-100%'
})
// add cart
cartPro.forEach(function(e) {
  e.addEventListener('click', (ele) => {
    cart.style.right = '0%'
    let listPro = ele.target.parentElement.parentElement
    let listInfo = ele.target.parentElement.parentElement.parentElement
    let imgPro = listPro.querySelector('img').src
    let namePro = listInfo.querySelector('h3').innerHTML
    let pricePro = listInfo.querySelector('p span').innerHTML
    let cartProductList = document.querySelector('.cartProduct')
    let cartProduct = document.createElement('div')
    cart.innerHTML = `<div class="grid grid-cols-2 gap-2 py-5 border-b">
                          <div class=" w-[110px] h-[130px]  m-auto">
                            <img class=" w-full h-full object-cover " src="../img/women4.png" alt="">
                          </div>
                          <div class="flex justify-between flex-col">
                            <div>
                              <h4 class="">Váy chấm bi</h4>
                              <p class="text-sm text-gray-500">$20</p>
                            </div>
                            <div>
                              <input class="w-[50px] border-0 focus:outline-none pl-1" type="number" value="1" min="1">
                            </div>             
                            <div>
                              <i class="fa-solid fa-pen-to-square"></i>
                              <i class="fa-solid fa-trash-can pl-[10px]"></i>
                            </div>
                          </div>
                      </div>`
    cartProductList.appendChild(cartProduct)
  })
})
