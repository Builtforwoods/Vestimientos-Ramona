function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function () {
    $('arrow-right').click(function () {
        $('#screenImage').attr('src', 'images/elslide1.png');

    });
    $('#arrow-right').click(function () {
        changeImage();
    });
    $('#arrow-left').click(function () {
        backImage();
    })
})
var slider = [];

slider[0] = 'images/elslide1.png';
slider[1] = 'images/elslide2.png';
slider[2] = 'images/elslide3.png';
slider[3] = 'images/elslide4.png';

var i = 0;
function changeImage() {

    if (i < slider.length - 1) {
        i++;
    } else {
        i = 0;
    }
    console.log(slider[i]);
    $("#screenImage").attr('src', slider[i]);
}

function backImage() {

    if (i > 0) {
        i--;
    } else {
        i = 0;
    }
    console.log(slider[i]);
    $('#screenImage').attr('src', slider[i]);
}