let count = 0;
document.addEventListener('wheel', function(event) {
    const y = event.deltaY || event.detail || event.wheelDelta;

    if (y > 0) {
        count = (count + 1) % 3;
        console.log("Up" + count)
    } else if (y < 0) {
        count = (count - 1) % 3;
        console.log("Down" + count)
    }
    if (count <= -1){
        count = 2
    }
    setBg(count);
    console.log("First count" + count)
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
    
    if (count === 0){
        topPosition = initialTop;
    }
    imgUrl = `./img/back${count}.png`

    const image = new Image();
    image.src = imgUrl;
    image.addEventListener('load', function() {
        document.body.style.backgroundImage = "url('" + imgUrl + "')";
        box.style.top = topPosition + 'px';
    });
    console.log(count);
}