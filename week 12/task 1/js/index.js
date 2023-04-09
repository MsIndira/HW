function press() {
  let enterName = document.getElementById("fname").value;

  let firstLetter = enterName.substr(0, 1);
  let restName = enterName.substr(1);
  let firstLetterUp = firstLetter.toUpperCase();
  let restNameLow = restName.toLowerCase();

  let enterAvatar = document.getElementById("avatarlink").value;

  let enterComment = document.getElementById("commentfield").value;

  let checkSpam = enterComment.replace(/viagra|XXX/gim, "***");

  let div1 = document.querySelector("#outcome__result");

  let img = document.createElement("img");
  img.className = "avatar";
  img.src = enterAvatar;
  div1.append(img);

  let p1 = document.createElement("p");
  p1.className = "fio";
  p1.innerHTML = firstLetterUp + restNameLow;
  div1.append(p1);

  let div2 = document.querySelector("#outcome");
  let p2 = document.createElement("p");
  p2.className = "checkedComment";
  p2.innerHTML = checkSpam;
  div2.append(p2);
}
