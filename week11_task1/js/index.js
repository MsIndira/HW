let goods1 = document.getElementById("notebookprice").innerHTML;
let goods2 = document.getElementById("plushtoyprice").innerHTML;
let goods3 = document.getElementById("vaseprice").innerHTML;
let goods4 = document.getElementById("stickersprice").innerHTML;

let sum = +goods1 + +goods2 + +goods3 + +goods4;
//console.log(sum);

let sumDiscount = document.getElementById("totalprice");
sumDiscount.textContent = sum;

function discount() {
  sumDiscount.textContent = sum * 0.8;
  document.getElementById("stickersprice").innerHTML = (goods4 * 0.8).toFixed(
    1
  );
  document.getElementById("notebookprice").innerHTML = goods1 * 0.8;
  document.getElementById("plushtoyprice").innerHTML = goods2 * 0.8;
  document.getElementById("vaseprice").innerHTML = goods3 * 0.8;
  const btn = document.getElementById("button");
  btn.setAttribute("disabled", "true");
}
