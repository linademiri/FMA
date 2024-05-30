// const bgr = document.createElement("img");
// bgr.src = 'images/background.png';
// const mainWrapper = document.querySelector('.mainWrapper')
// mainWrapper.appendChild(bgr);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = 'images/background.png';
bgGame.onload = function () {
    ctx.drawImage(bgGame, 0, 0);
}
const catImg = new Image();
catImg.src = "images/cat.png"
catImg.onload = function () {
    ctx.drawImage(catImg, 0, 0)
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;

mouseObj.x = Math.floor(Math.random() * 512 - mouseObj.width);
mouseObj.y = Math.floor(Math.random() * 480 - mouseObj.height);


const mouse = new Image();
mouse.src = "images/mouse.png"
mouse.onload = function () {
    if (mouseObj.x < 0) {
        ctx.drawImage(mouse, 0, mouseObj.y);
    }
    else {
        ctx.drawImage(mouse, mouseObj.x, mouseObj.y);
    }
    if (mouseObj.y < 0) {
        ctx.drawImage(mouse, mouseObj.x, 0);
    }
    else {
        ctx.drawImage(mouse, mouseObj.x, mouseObj.y);
    }

}