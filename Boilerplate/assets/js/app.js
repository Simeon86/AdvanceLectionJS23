window.addEventListener('DOMContentLoaded', (event) => {

    var box = document.querySelector('.box');

    if(box) {
        box.addEventListener('click', event => {
            box.classList.add('move');
            setTimeout(() => {
                box.classList.remove('move');
            }, 300)
        })
    }

    var box = document.querySelector('.clickMe');

    var eventNameUp = 'mouseup';
    var callBackUp = function(event) {
        box.classList.remove('yellow')
    }
    box.addEventListener(eventNameUp, callBackUp)

    var eventNameDown = 'mousedown';
    var callBackDown = function(event) {
        box.classList.add('yellow')
    }
    box.addEventListener(eventNameDown, callBackDown)

    var eventNameOver = 'mouseover';
    var callBackOver = function(event) {
        box.classList.add('over')
    }
    box.addEventListener(eventNameOver, callBackOver)

    var eventNameOut = 'mouseout';
    var callBackOut = function(event) {
        box.classList.remove('over')
    }
    box.addEventListener(eventNameOut, callBackOut)
})