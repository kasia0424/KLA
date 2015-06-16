function dropdown(){
	$("<select />").appendTo("nav");

	
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Idź do..."
	}).appendTo("nav select");

	
	$("nav a").each(function() {
	 var el = $(this);
	 $("<option />", {
	     "value"   : el.attr("href"),
	     "text"    : el.text()
	 }).appendTo("nav select");
	});
}

// function showes images in gallery
function gallery(){
	$('.galeria img').click(function(){
		$(this).addClass('seen');
	});
	$('body').click(function(){
		$watchedImg = $('.seen');
		$watchedImg.removeClass("seen");
	})
}



$(document).resize(function(){
	dropdown();
});
$(document).ready(function(){
	dropdown();
	gallery();


	//showes chosen time on timeline
	$("ul.timeline li").click(function(){
		var $className = $(this).attr("class");

		switch($className){
			case 'first':
				var $element = $('section.first');
			break;
			case 'second':
				var $element = $('section.second');
				console.log("druga");
			break;
			case 'third':
				var $element = $('section.third');
			break;
			case 'fourth':
				var $element = $('section.fourth');
			break;
		};

		$('section.shown').removeClass("shown").addClass("hidden");
		$element.toggleClass("shown");
		$('li.highlighted').removeClass("highlighted");
		$(this).toggleClass("highlighted");
	});


	//shows information about creators
	$('.old article img').hover(
		function(){ //when mouse enter
			$(this).next('p').removeClass("hidden").addClass("shown");
		},
		function(){ //when mouse leaves
			$(this).next('p').removeClass("shown").addClass("hidden");
		}
	);

});