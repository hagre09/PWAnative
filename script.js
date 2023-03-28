
var imgs = document.getElementsByTagName("img");
var i = 0;
var intervalShow;
var firstImgSRC = imgs[0].src

var buttons = document.getElementsByTagName("button");

function move(dir = "next") {
    (dir == "next") ? i++ : i--;
    if (i >= imgs.length) {
        i = 0;
        imgs[0].src = firstImgSRC;
    }

    if (i < 0) {
        i = imgs.length - 1;
    }

    imgs[0].src = imgs[i].src;
}

buttons[0].onclick = function () {
    clearInterval(intervalShow);
    move()
}

buttons[1].onclick = function () {
    clearInterval(intervalShow);
    intervalShow = setInterval(() => {
        move();
    }, 1000);
}

buttons[2].onclick = function () {
    clearInterval(intervalShow);
}

buttons[3].onclick = function () {
    clearInterval(intervalShow);
    move("previous")
}