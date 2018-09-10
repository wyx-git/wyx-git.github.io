let iceTag=$(".ice-tag").position();
let speed=0.65;
let iceBef=0;
let iceL=iceTag.left;
$("#container").hide();
let iceBar=setInterval(function () {
    iceL+=speed;
    iceBef+=0.2;
    $(".ice-tag").html(Math.round(iceBef)+"%");
        $(".ice-tag").css({"left":`${iceL}px`});
},10);
setTimeout(function () {
    clearInterval(iceBar);
    $("#progress-bar").slideUp(500);
    $("#container").show();
},5000);