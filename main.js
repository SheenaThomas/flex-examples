window.onload = main;

function main() {
    document.getElementById('div-1').onclick = function () {
        changeColor('div-2');
    }

    document.getElementById('div-2').onclick = function () {
        changeColor('div-3');
    }

    document.getElementById('div-3').onclick = function () {
        changeColor('div-1');
    }

    function changeColor(divName) {
        let elem = document.getElementById(divName);
        let theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
        if (theCSSprop === 'rgb(255, 0, 0)') {
            theCSSprop = 'rgb(0, 255, 0)';
        } else {
            theCSSprop = 'rgb(255, 0, 0)';
        }
        elem.style.background = theCSSprop;
    }
}