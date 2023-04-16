let outputWindow = document.getElementById("output");


function count() {
  let inputEnter = document.getElementById("enter").value;
  console.log(inputEnter ** 2);
  outputWindow.value = inputEnter ** 2;
}
