!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /**
     * Created by fallenSoulDev on 10.09.2016.
     */
    var tagNameMap = new Map();
    var classNameMap = new Map();
    var textNodesMap = new Map();

    function scanDom(Node) {

        for (var i = 0; i < Node.childNodes.length; i++) {
            var childNode = Node.childNodes[i];
            var tag = childNode.tagName;
            var nodeName = childNode.nodeName;
            var className = childNode.className;
            if (childNode.nodeType === 1) {
                if (!tagNameMap.has(tag)) {
                    tagNameMap.set(tag, 1);
                } else {
                    let val = tagNameMap.get(tag);
                    let count = parseInt(val) + 1;
                    tagNameMap.set(tag, count);
                }
                if (className !== "") {
                    if (!classNameMap.has(className)) {
                        classNameMap.set(className, 1);
                    } else {
                        let val = classNameMap.get(className);
                        let count = parseInt(val) + 1;
                        classNameMap.set(className, count);
                    }
                }
            }
            if (childNode.nodeType !== 3) {
                scanDom(childNode);
            } else {
                if (!textNodesMap.has(nodeName)) {
                    textNodesMap.set(nodeName, 1);
                } else {
                    let val = textNodesMap.get(nodeName);
                    let count = parseInt(val) + 1;
                    textNodesMap.set(nodeName, count);
                }
            }
        }
        return [tagNameMap, classNameMap, textNodesMap];
    }

    module.exports = scanDom;
    /**
     * Created by fallenSoulDev on 11.10.2016.
     */
});
$__System.registerDynamic('3', ['2'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    let scanDom = $__require('2');

    function consoleOutputElements() {

        let tags = scanDom(document.documentElement);
        let tag, classes, textNodes;

        for (let i = 0; i < tags.length; i++) {
            switch (i) {
                case 0:
                    tag = tags[i];
                    break;
                case 1:
                    classes = tags[i];
                    break;
                case 2:
                    textNodes = tags[i];
                    break;
            }
        }

        tag.forEach((value, key) => {
            console.log(`Тегов ${key}: ${value}`);
        });
        classes.forEach((value, key) => {
            console.log(`Классов ${key}: ${value}`);
        });
        textNodes.forEach((value, key) => {
            console.log(`Текстовых узлов: ${value}`);
        });
    }

    module.exports = consoleOutputElements;
});
$__System.registerDynamic('1', ['3'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  //scanDom
  // let prepend = require('../homework1/prependFunction.js');
  // let viewNodes = require('../_myTask/viewNodesFunction.js');
  // let noRecursionDeleteTextNodes = require('../homework2/noRecursionDeleteTextNodes.js');
  // let recursionDeleteTextNodes = require('../homework3/recursionDeleteTextNodes.js');
  let consoleOutputElements = $__require('3');
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

  $(document).ready(function () {
    $('.slider__list').bxSlider();
  });

  // tabs
  $(document).ready(function () {

    $('.tab__item').on('click', function (e) {

      var num = $(e.target).data('number');

      $('.tab__item').removeClass('current');
      $('.tab__item[data-number=' + num + ']').addClass('current');

      $('.tab-content__item').removeClass('current');
      $('.tab-content__item[data-number=' + num + ']').addClass('current');
    });
  });

  // phone mask
  $(document).ready(function () {
    var selector = document.getElementById("inputmask");

    var im = new Inputmask("99-9999999");
    im.mask(selector);

    Inputmask("9 (999) 999-99-99").mask(selector);
  });

  // accordion
  $(document).ready(function () {

    $('.active').find('.accordion__inner').show();

    $('.accordion__trigger').on('click', function (e) {
      e.preventDefault();

      var $this = $(this),
          trigger = $this.closest('.accordion__trigger');
      item = $this.closest('.accordion__item'), list = $this.closest('.accordion__list'), items = list.find('.accordion__item'), content = item.find('.accordion__inner'), fullContent = list.find('.accordion__inner'), duration = 300;

      if (!item.hasClass('active')) {

        items.removeClass('active');
        item.addClass('active');

        fullContent.stop(true, true).slideUp(duration);
        content.slideDown(duration);
      } else {
        content.slideUp(duration);
        item.removeClass('active');
      }
    });
  }); // - > ready_end;
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map