// $ (function() {
// 	var myMap;
//   		ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
//  		 function init () {
//     	myMap = new ymaps.Map("map", {
//      		 center: [55.76, 37.64], // Координаты центра карты
//       		zoom: 10 // Zoom
//     });
//   }
// });

 ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.75734458, 37.60429408],
            zoom: 18,
            controls: ['zoomControl']        
        });
			myMap.behaviors.disable('scrollZoom');
			myMap.behaviors.disable('drag');
			myMap.behaviors.disable('doubleClick');


      var myPlacemark = new ymaps.Placemark([55.757370, 37.60410] , {},
        { iconLayout: 'default#image',
          iconImageHref: '../img/png/pic/maps/pin-red-8.png',
          iconImageSize: [40, 51],
          iconImageOffset: [-20, -46] });     

    myMap.geoObjects.add(myPlacemark);

    }