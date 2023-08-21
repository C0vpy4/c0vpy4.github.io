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

async function setBg(count) {
    var box = document.getElementsByClassName("box")[0];
    var currentTop = parseInt(box.style.top) || 0;
    var windowHeight = window.innerHeight;
    var initialTop = (windowHeight / 2) - (box.offsetHeight / 2); // Вычисляем изначальную позицию по вертикали на середину экрана
    if (count === 0) {
        document.body.style.backgroundImage = "url('./img/back1.png')";
        box.style.top = initialTop + 'px'; // Применяем изначальную позицию
    }
    if (count === 1) {
        document.body.style.backgroundImage = "url('./img/back2.png')";
        box.style.top = (currentTop - 1000) + 'px';
    }
    if (count === 2) {
        document.body.style.backgroundImage = "url('./img/back3.png')";
        box.style.top = (currentTop - 1000) + 'px';
    }

}

async function fixBox() {
    var box = document.getElementsByClassName("box")[0];
    var currentTop = parseInt(box.style.top) || 0;
    var windowHeight = window.innerHeight;
    var initialTop = (windowHeight / 2) - (box.offsetHeight / 2); // Вычисляем изначальную позицию по вертикали на середину экрана
    box.style.top = initialTop + 'px'; // Применяем изначальную позицию
}