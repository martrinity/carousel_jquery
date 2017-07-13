$(document).ready(function(){
    // Activate Carousel
    $(#carousel-animal).carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#carousel-animal").carousel(0);
    });
    $(".item2").click(function(){
        $("#carousel-animal").carousel(1);
    });
    $(".item3").click(function(){
        $("#carousel-animal").carousel(2);
    });
    $(".item4").click(function(){
        $("#carousel-animal").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#carousel-animal").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel-animal").carousel("next");
    });
});