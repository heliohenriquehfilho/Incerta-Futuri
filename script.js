function run(){
    window.scrollTo(0, 0);
    document.getElementById("message").hidden = false
    document.getElementById("bttn2").hidden = true
    document.getElementById("start").hidden = false
    var msc = new Audio('mixkit-piano-horror-671.mp3')
    msc.play()
    window.scrollTo(0, 0);
}
function start(){
    window.scrollTo(0, 0);
    document.getElementById("new").hidden = false;
    document.getElementById("scro").hidden = false;
    document.getElementById('start').hidden = true;
    document.getElementById('message').hidden = true;
    document.getElementById("audio").style.display = 'none'
    window.scrollTo(0, 0);
}
function janela(){
    window.scrollTo(0, 0);
    document.getElementById("new").hidden = true;
    document.getElementById("janela").hidden = false;
    window.scrollTo(0, 0);
}
function barulho(){
    window.scrollTo(0, 0);
    document.getElementById("new").hidden = true;
    document.getElementById("barulho").hidden = false;
    window.scrollTo(0, 0);
}
function gritar(){
    window.scrollTo(0, 0);
    document.getElementById("janela").hidden = true;
    document.getElementById("gritar").hidden = false;
    window.scrollTo(0, 0);
}
function C1a(){
    window.scrollTo(0, 0);
    document.getElementById("gritar").hidden = true;
    document.getElementById("c1a").hidden = false;
}
function levantar(){
    window.scrollTo(0, 0);
    document.getElementById("janela").hidden = true;
    document.getElementById("levantar").hidden = false;
}
function C1b(){
    window.scrollTo(0, 0);
    document.getElementById("levantar").hidden = true;
    document.getElementById("c1b").hidden = false;
    $(window).scrollTop(0);
}
function concordar(){
    window.scrollTo(0, 0);
    document.getElementById("c1b").hidden = true;
    document.getElementById("concordar").hidden = false;
    $(window).scrollTop(0);
}
function concordar2(){
    window.scrollTo(0, 0);
    document.getElementById("c1a").hidden = true;
    document.getElementById("concordar2").hidden = false;
    $(window).scrollTop(0);
}
function chamar(){
    window.scrollTo(0, 0);
    document.getElementById("barulho").hidden = true;
    document.getElementById("chamar").hidden = false;
    $(window).scrollTop(0);
}
function c1c(){
    window.scrollTo(0, 0);
    document.getElementById("chamar").hidden = true;
    document.getElementById("c1c").hidden = false;
}
function silencio (){
    window.scrollTo(0, 0);
    document.getElementById("barulho").hidden = true;
    document.getElementById("silencio").hidden = false
}