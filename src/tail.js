let menuBtn = document.querySelector("#menuTop");
let menu = document.querySelector("#listMenu");
let quick = document.querySelectorAll("#trenQuick");
let quickView = document.querySelector("#quickView");
let closeQuick = document.querySelector("#closeQuick");
let quickImg = document.querySelector("#quickImage img");
let quickName = document.querySelector("#nameQuick");
let quickPrice = document.querySelector("#priceQuick");

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
    console.log(list);
    quickImg.src = listImage.src;
    quickName.innerHTML = listName.innerHTML;
    quickPrice.innerHTML = listPrice.innerHTML;
    quickView.style.transform = "scale(1)";
  });
});

closeQuick.addEventListener("click", function () {
  quickView.style.transform = "scale(0)";
});
