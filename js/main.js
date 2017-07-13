$(document).ready(function() {
	var theimagen = $("ul li img");
	var thewidth = imagen.width();

	$("ul").wrap("<div id='contenedor' />");
	//div envolvera a cada ul
	$("#contenedor").css({//estilos desde js
		width: function(){
			return thewidth;
		},
		height: function(){
			return theimage.height();
		},
		position: "relative",
		overflow: "hidden"
	});

	var widthTotal =theimage.length *thewidth;
	$("ul").css({
		width: function(){
			reeturn widthTotal;
		}
	});
	
	$(theimage).each(
		function(index){
			$(this).nextAll("a").blind("click", function(){
				if($(this).is(".next")){
					$(this).parent("li").parent("ul").animate({
						"margin-left" : (-(index + 1)* thewidth)
					}, 2000)
				} else if($(this).is(".previous")){
					$(this).parent("li").parent("ul").animate({
						"margin-left" : (-(index - 1)* thewidth)
					}, 2000)
				}else if($(this).is(".startover")){
					$(this).parent("li").parent("ul").animate({
						"margin-left" : (0)
					}, 2000)
				}
			});
		});
});