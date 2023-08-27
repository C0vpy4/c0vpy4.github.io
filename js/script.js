let count = 0;
document.addEventListener('wheel', function(event) {
    setBg(count);
    const y = event.deltaY || event.detail || event.wheelDelta;

    if (y > 0) {
        count = (count + 1) % 3;
    } else if (y < 0) {
        count = (count - 1 + 3) % 3;
    }
});

function btnClick() {
    setBg(count);
    count = (count + 1) % 3;
}

async function setBg(count) {
    const box = document.getElementsByClassName("box")[0];
    const currentTop = parseInt(box.style.top) || 0;
    const windowHeight = window.innerHeight;
    const initialTop = (windowHeight / 2) - (box.offsetHeight / 2);

    let imgUrl = "";
    let topPosition = currentTop - 1000;

    if (count === 0) {
        imgUrl = "./img/back1.png";
        topPosition = initialTop;
    } else if (count === 1) {
        imgUrl = "./img/back2.png";
    } else if (count === 2) {
        imgUrl = "./img/back3.png";
    }

    const image = new Image();
    image.src = imgUrl;
    image.addEventListener('load', function() {
        document.body.style.backgroundImage = "url('" + imgUrl + "')";
        box.style.top = topPosition + 'px';
    });
}