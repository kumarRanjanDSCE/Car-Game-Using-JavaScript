document.getElementById("btn1").addEventListener("click", hi);
document.getElementById("btn2").addEventListener("click", stop);
let collection;
let margin = 0;
let it;
function hi() {
  collection = document.getElementById("car");
  it = setInterval(fun, 100);
}


function fun() {
  console.log(margin);
  margin = parseInt(margin) + 5;
  collection.style.marginLeft = margin + "px";
}
function stop() {
  clearInterval(it);
}