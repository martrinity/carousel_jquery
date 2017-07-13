// Activate Carousel
$("#carousel-animal").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#carousel-animal").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#carousel-animal").carousel("prev");
});