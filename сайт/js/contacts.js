ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [59.932938, 30.322847],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.events.add('sizechange', function() {
        myMap.container.fitToViewport();
    });
    myMap.geoObjects.add(new ymaps.Placemark([59.932938, 30.322847], {
        balloonContent: 'Пространство SENO, м.Спасская/Садовая, ул.Гороховая 47стр2'
    }, {
        preset: 'islands#redIcon'
    }));
}