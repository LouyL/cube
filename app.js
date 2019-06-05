var colors = ["#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF", "#0000FF", "#FF00FF", "#800080"];
var i = 0;
document.querySelector("#button").addEventListener("click", function () {
    i = i < colors.length ? ++i : 0;
    document.querySelector("#carre").style.background = colors[i]
})
document.querySelector("#blue").addEventListener("click", function () {
    document.querySelector("#carre").style.background = "blue"
})
document.querySelector("#vert").addEventListener("click", function () {
    document.querySelector("#carre").style.background = "green"
})
document.querySelector("#rouge").addEventListener("click", function () {
    document.querySelector("#carre").style.background = "red"
})
document.querySelector("#rose").addEventListener("click", function () {
    document.querySelector("#carre").style.background = "pink"
})
document.querySelector("#button1").addEventListener("click", function () {
    // document.querySelector("#carre").style.borderRadius = "50%";
    document.querySelector("#carre").classList.toggle('rond');
})
// $("#button1").click(function(){
//     $("#carre").animate({border: '50% solid'});
// });  
// var billard = document.querySelector('#billard');
// variables objet
var boule = document.querySelector('#carre');
var x;
var y;
// programmation des touches de direction
document.onkeydown = function (event) {
    if (event.keyCode == 37) gauche();
    if (event.keyCode == 39) droite();
    if (event.keyCode == 38) haut();
    if (event.keyCode == 40) bas();
}
// fin fonction
// quatre fonctions de déplacement
function gauche() {
    x = getComputedStyle(boule).left;
    x = parseInt(x);
    x = x - 20;
    x = x + "px";
    boule.style.left = x;
}

function droite() {
    x = getComputedStyle(boule).left;
    x = parseInt(x);
    x = x + 20;
    x = x + "px";
    boule.style.left = x;
}

function haut() {
    y = getComputedStyle(boule).top;
    y = parseInt(y);
    y = y - 20;
    y = y + "px";
    boule.style.top = y;
}

function bas() {
    y = getComputedStyle(boule).top;
    y = parseInt(y);
    y = y + 20;
    y = y + "px";
    boule.style.top = y;
}