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
    let listPro = ele.target.parentElement.parentElement
    let listInfo = ele.target.parentElement.parentElement.parentElement
    let imgPro = listPro.querySelector('img').src
    let namePro = listInfo.querySelector('h3').innerHTML
    let pricePro = listInfo.querySelector('p span').innerHTML
    console.log(namePro)
  })
})
