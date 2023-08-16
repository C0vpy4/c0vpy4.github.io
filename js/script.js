function btnClick() {
    document.body.style.backgroundImage = "url('./img/back2.png')";
}
let count = 0;
document.addEventListener('wheel', function(event) {
    var y = event.deltaY || event.detail || event.wheelDelta,
        val = 0.1,
        min = 0,
        max = 0;
    if (y > 0) {
        count = count + 1;
    }
    if (y < 0) {
        count = count - 1;
    }
    var box = document.getElementsByClassName("box")[0];
    var currentTop = parseInt(box.style.top) || 0;
    if (count === 0) {
        document.body.style.backgroundImage = "url('./img/back1.png')";
        box.style.top = 289 + 'px';
    }
    if (count === 1) {
        document.body.style.backgroundImage = "url('./img/back2.png')";
        box.style.top = (currentTop - 1000) + 'px';
    }
    if (count === 2) {
        document.body.style.backgroundImage = "url('./img/back3.png')";
    }
});