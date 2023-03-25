//let choice = confirm('Are you a dreamer?');
//alert('You are' + ' ' + choice);

let year = prompt("Введите год, чтобы узнать, високосный ли он");

//+year % 100 == 0,

function yearCalculator() {
  if (+year % 4 == 0 && +year % 100 !== 0) {
    alert("Год високосный");
  } else if (+year % 100 == 0 && +year % 400 == 0) alert("Год високосный");
  else alert("Год не високосный");
}

yearCalculator();
