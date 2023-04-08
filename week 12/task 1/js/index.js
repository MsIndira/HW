function press() {
  let enterName = document.getElementById("fname").value;
  //alert(enterName);
  let firstLetter = enterName.substr(0, 1);
  let restName = enterName.substr(1);
  let firstLetterUp = firstLetter.toUpperCase();
  let restNameLow = restName.toLowerCase();
  //alert(firstLetterUp + restNameLow);

  let div = document.querySelector("#outcome__result");
  let p = document.createElement("p");
  p.innerHTML = firstLetterUp + restNameLow;
  div.append(p);
}

//<div>
//<img src="" alt="avatar" />
//<p></p>
//</div>
//<p></p>
