let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
console.log(dice1, dice2)

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

let imgName1 = "dice" + dice1;
let imgName2 = "dice" + dice2;
console.log(imgName1, imgName2)

img1.src = "assets/images/" + imgName1 + ".png"
img2.src = "assets/images/" + imgName2 + ".png"
console.log(img1.src, img2.src)
