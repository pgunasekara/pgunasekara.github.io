$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#section-about").offset().top
        }, 2000);
    });
});