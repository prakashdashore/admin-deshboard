let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  item.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let menu = document.querySelector("#menu");
let ghum = document.querySelector("#ghum");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

let flag=0;

menu.addEventListener("mouseover",function(){
  ghum.style.transform="rotate(360deg)"
  // menu.style.backgroundColor="red"


})


menu.addEventListener("mouseout",function(){
  ghum.style.transform="rotate(0deg)"
  // menu.style.backgroundColor="green"


})


