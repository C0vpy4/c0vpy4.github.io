let count = 0;
document.addEventListener('wheel', function(event) {
    setBg(count)
    var y = event.deltaY || event.detail || event.wheelDelta,
        val = 0.1,
        min = 0,
        max = 0;
    if (y > 0) {
        count = count + 1;
        if (count > 2) {
            count = 0
        }
    }
    if (y < 0) {
        count = count - 1;
        if (count < 0) {
            count = 2
        }
    }


});

function btnClick() {
    setBg(count)
    count = count + 1;
    if (count > 2) {
        count = 0
    }
}

function setBg(count) {
    var box = document.getElementsByClassName("box")[0];
    var currentTop = parseInt(box.style.top) || 0;
    var windowHeight = window.innerHeight;
    var initialTop = (windowHeight / 2) - (box.offsetHeight / 2); // Вычисляем изначальную позицию по вертикали на середину экрана

    var imgUrl = "";
    var topPosition = currentTop - 1000;

    if (count === 0) {
        imgUrl = "./img/back1.png";
        topPosition = initialTop;
    } else if (count === 1) {
        imgUrl = "./img/back2.png";
    } else if (count === 2) {
        imgUrl = "./img/back3.png";
    }

    document.body.style.backgroundImage = "url('" + imgUrl + "')";
    box.style.top = topPosition + 'px';
}

// async function fixBox() {
//     var box = document.getElementsByClassName("box")[0];
//     var currentTop = parseInt(box.style.top) || 0;
//     var windowHeight = window.innerHeight;
//     var initialTop = (windowHeight / 2) - (box.offsetHeight / 2); // Вычисляем изначальную позицию по вертикали на середину экрана
//     box.style.top = initialTop + 'px'; // Применяем изначальную позицию
// }