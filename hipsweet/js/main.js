//scanDom
// let prepend = require('../homework1/prependFunction.js');
// let viewNodes = require('../_myTask/viewNodesFunction.js');
// let noRecursionDeleteTextNodes = require('../homework2/noRecursionDeleteTextNodes.js');
// let recursionDeleteTextNodes = require('../homework3/recursionDeleteTextNodes.js');
let consoleOutputElements = require('../homework4/consoleOutputElements.js');
// let scanDom2 = require('../homework4/scanDom2.js');


//prepend function
// let container = document.getElementById('wrapper');
// let newElement = document.createElement('div');
// newElement.style = 'width: 500px;height: 50px;background-color: antiquewhite;margin-bottom: 10px;';
// newElement.innerHTML = 'Привет мир!!!';
// prepend(container, newElement);

//node manipulation
//my task, viewNodes and textNodesCounter
// viewNodes(document.getElementById('wrapper'));

// сделать кнопку по нажатию которой будет происходить удаление текстовых узлов
// noRecursionDeleteTextNodes

// noRecursionDeleteTextNodes(document.getElementById('wrapper'));

// recursionDeleteTextNodes

// recursionDeleteTextNodes(document.getElementById('wrapper'));

//сканирование дом дерева и подсчет узлов

consoleOutputElements();


// slider

$(document).ready(function() {
	$('.slider__list').bxSlider();
});

// tabs
$(document).ready(function() {

	$('.tab__item').on('click', function(e){

		var num = $(e.target).data('number');

		$('.tab__item').removeClass('current');
		$('.tab__item[data-number='+num+']').addClass('current');

		$('.tab-content__item').removeClass('current');
		$('.tab-content__item[data-number='+num+']').addClass('current');
	});
	
});

// phone mask
$(document).ready(function() {
	var selector = document.getElementById("inputmask");

var im = new Inputmask("99-9999999");
im.mask(selector);

Inputmask("9 (999) 999-99-99").mask(selector);
});

// accordion
$(document).ready(function() {

      $('.active').find('.accordion__inner').show();

      $('.accordion__trigger').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            trigger = $this.closest('.accordion__trigger')
            item = $this.closest('.accordion__item'),
            list = $this.closest('.accordion__list'),
            items = list.find('.accordion__item'),
            content = item.find('.accordion__inner'),
            fullContent = list.find('.accordion__inner'),
            duration = 300;

        if (!item.hasClass('active')){

          items.removeClass('active');
            item.addClass('active');

            fullContent.stop(true, true).slideUp(duration);
            content.slideDown(duration);
        }  
        else{
          content.slideUp(duration);
          item.removeClass('active');
        }

          
      });

});  // - > ready_end;
