let imgDetail = document.querySelector(".imageDetail");
let listImg = document.querySelectorAll(".ListImgDetail");
function dele() {
  listImg.forEach(function (e) {
    e.style.border = "none";
  });
}
listImg.forEach(function (e) {
  e.addEventListener("click", function (ele) {
    let img = ele.target.parentElement;
    imgDetail.src = img.querySelector("img").src;
    dele();
    e.style.border = "1px solid red";
  });
});
