// const bgr = document.createElement("img");
// bgr.src = 'images/background.png';
// const mainWrapper = document.querySelector('.mainWrapper')
// mainWrapper.appendChild(bgr);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const bgGame = new Image();
bgGame.src = 'images/background.png';

let bgReady = false;
let timer = 15;
let points = 0;
bgGame.onload = function () {
    bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 40;
catObj.speed = 5;
catObj.width = 120;
catObj.height = 128;

let catReady = false;
const catImg = new Image();
catImg.src = 'images/cat.png';
catImg.onload = function () {
    catReady = true;
}

let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;

mouseObj.x = Math.floor(Math.random() * 460);
mouseObj.y = 30 + Math.floor(Math.random() * 396);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = 'images/mouse.png';
mouseImg.onload = function () {
    mouseReady = true;
}

function render() {
    if (bgReady) {
        ctx.drawImage(bgGame, 0, 0);
    }
    if (catReady) {
        ctx.drawImage(catImg, catObj.x, catObj.y)
    }
    if (mouseReady) {
        ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y)
    }
    if (catObj.x > 500) { catObj.x = -50; }
    if (catObj.x < -51) { catObj.x = 499; }
    if (catObj.y > 460) { catObj.y = -50; }
    if (catObj.y < 40) { catObj.y = 41; }

    if ((catObj.x + catObj.width) > mouseObj.x
        && (catObj.y + catObj.height) > mouseObj.y
        && (catObj.x + 15) < (mouseObj.x + mouseObj.width)
        && catObj.y + 10 < (mouseObj.y + mouseObj.height)) {
        mousePos(); if (timer != 0) { points++; }
    }
    if (timer == 0) {
        mouseObj.x = 3000;
        if (points >= 3) {
            ctx.fillStyle = 'white';
            ctx.fillText("you win ", 220, 200);
        } else {
            ctx.fillStyle = 'red';
            ctx.fillText("You lose ", 220, 200);
        }

    }
    ctx.font = "20px Georgia";
    ctx.fillStyle = 'white';
    ctx.fillText("points : " + points, 10, 25);
    ctx.fillText("timer : " + timer, 400, 25);
};

function time() {
    if (timer == 0) {
        clearInterval(timeRunner);
    }
    else { timer--; }
}

addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        catObj.x += catObj.speed
    }
    if (e.key == 'ArrowLeft') {
        catObj.x -= catObj.speed
    }
    if (e.key == 'ArrowDown') {
        catObj.y += catObj.speed
    }
    if (e.key == 'ArrowUp') {
        catObj.y -= catObj.speed
    }
});
function mousePos() {
    mouseObj.x = Math.floor(Math.random() * 460);
    mouseObj.y = 30 + Math.floor(Math.random() * 396);
}
const renderFrame = setInterval(render, 1);
const timeRunner = setInterval(time, 1000);