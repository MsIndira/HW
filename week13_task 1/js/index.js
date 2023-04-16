//let checkNo = document.getElementById("no");
//let checkYes = document.getElementById("yes");

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
  if (document.getElementById("avatarlink").value === true) {
    img.src = enterAvatar;
    div1.append(img);
  } else {
    //array of images with image location, height, and width
    let imageArray = [
      {
        //address URL of the image
        src: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png",
        //size for the image to be display on webpage
        width: "150",
        height: "95",
      },
      {
        src: "https://forum.garudalinux.org/uploads/default/original/2X/b/bee89033f3306779d3081a43e57fb34ad04fa4d1.png",
        width: "150",
        height: "95",
      },
      {
        src: "https://www.clipartmax.com/png/middle/198-1988635_user-avatar-operating-systems-i-linux.png",
        width: "150",
        height: "95",
      },
      {
        src: "https://pbs.twimg.com/media/DhsRKlhUEAAc50O.jpg",
        width: "150",
        height: "95",
      },
      {
        src: "https://cdn.imgbin.com/23/5/21/imgbin-tux-of-math-command-penguin-aang-tux-racer-penguin-7aFWDjZG3yMrgt8SA6ZPRK1zk.jpg",
        width: "150",
        height: "95",
      },
      {
        src: "https://i.pinimg.com/236x/5e/b5/29/5eb529e9fc340373cc30b1bb02daa46d--gandalf-linux.jpg",
        width: "150",
        height: "95",
      },
    ];
    //find the length of the array of images
    let arrayLength = imageArray.length;
    let newArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray[i] = new Image();
      newArray[i].src = imageArray[i].src;
      newArray[i].width = imageArray[i].width;
      newArray[i].height = imageArray[i].height;
    }

    // create random image number
    function getRandomNum(min, max) {
      // generate and return a random number for the image to be displayed
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
    }

    // 0 is first image and (preBuffer.length - 1) is last image of the array
    let newImage = getRandomNum(0, newArray.length - 1);

    // remove the previous images
    //let images = document.getElementsByTagName("img");
    //let l = images.length;
    //for (let p = 0; p < l; p++) {
    //  images[0].parentNode.removeChild(images[0]);
    //}
    // display the new random image
    document.querySelector("#outcome__result").appendChild(newImage);
  }
  // img.src = enterAvatar;

  let p1 = document.createElement("p");
  p1.className = "fio";
  if (document.getElementById("yes").checked) {
    p1.innerHTML = firstLetterUp + restNameLow;
  } else {
    p1.innerHTML = "username";
  }
  div1.append(p1);

  let time = new Date();
  let day = time.getDate();
  //console.log(day); // 23
  let month = time.getMonth();
  //console.log(month + 1); // 8
  let year = time.getFullYear();
  //console.log(year); // 2022
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let commentTime = document.createElement("p");
  commentTime.className = "pTime";
  commentTime.innerHTML = `${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`;
  div1.append(commentTime);

  let p2 = document.createElement("p");
  p2.className = "checkedComment";
  p2.innerHTML = checkSpam;
  div1.append(p2);
}
