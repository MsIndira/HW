let goods1 = document.getElementById("notebookprice").innerHTML;
let goods2 = document.getElementById("plushtoyprice").innerHTML;
let goods3 = document.getElementById("vaseprice").innerHTML;
let goods4 = document.getElementById("stickersprice").innerHTML;

let sum = +goods1 + +goods2 + +goods3 + +goods4;
//console.log(e);

let sumDiscount = document.getElementById("totalprice");
sumDiscount.textContent = sum;

function discount() {
  sumDiscount.textContent = sum * 0.8;
  const btn = document.getElementById("button");
  btn.setAttribute("disabled", "true");
}

//button.addEventListener("click", () => {
//  f.textContent = e * 0.8;
//});
