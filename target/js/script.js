function gallery() {
    // Получаем ссылки на изображения
    const leftImg = document.getElementById('left-img');
    const topImg = document.getElementById('top-img');
    const rightImg = document.getElementById('right-img');

    // Создаем анимацию для левого изображения
    leftImg.style.transition = 'transform 0.5s';
    leftImg.style.transform = 'translate(-10%)';

    // Создаем анимацию для верхнего изображения
    topImg.style.transition = 'transform 0.5s';
    topImg.style.transform = 'translate(-20%)';

    // Создаем анимацию для правого изображения
    rightImg.style.transition = 'transform 0.5s';
    rightImg.style.transform = 'translate(-10%)';

    // После завершения анимации меняем местами изображения
    setTimeout(function() {
        [leftImg.src, topImg.src, rightImg.src] = [topImg.src, rightImg.src, leftImg.src];
        leftImg.style.transform = 'translate(0%)';
        topImg.style.transform = 'translate(0%)';
        rightImg.style.transform = 'translate(0%)';
    }, 500); // 500 мил
}

function gallery_right() {
    // Получаем ссылки на изображения
    const leftImg = document.getElementById('left-img');
    const topImg = document.getElementById('top-img');
    const rightImg = document.getElementById('right-img');

    // Создаем анимацию для левого изображения
    leftImg.style.transition = 'transform 0.5s';
    leftImg.style.transform = 'translate(10%)';

    // Создаем анимацию для верхнего изображения
    topImg.style.transition = 'transform 0.5s';
    topImg.style.transform = 'translate(20%)';

    // Создаём анимацию для правого изображения 
    rightImg.style.transition = 'transform 0.5s';
    rightImg.style.transform = 'translate(30%)';

    // После завершения анимации меняем местами изображения и сбрасываем анимацию
    setTimeout(function() {
        [leftImg.src, topImg.src, rightImg.src] = [topImg.src, rightImg.src, leftImg.src];
        leftImg.style.transform = 'none';
        topImg.style.transform = 'none';
        rightImg.style.transform = 'none';
    }, 500); // 500 миллисекунд - время анимации (0,5 секунды)
}