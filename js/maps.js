

function init(){
    
    let myMap = new ymaps.Map('map',{
    center:[57.5335903710942,38.33502323828125],
    zoom: 16
    })

    let myPlacemark = new ymaps.Placemark([57.5335903710942,38.33502323828125], {
        hintContent: 'My place',
        balloonContent: 'Home'
    })

    myMap.geoObjects.add(myPlacemark)
}


ymaps.ready(init)
