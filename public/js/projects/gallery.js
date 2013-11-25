function shuffleImages(direction){
	var images = $('.stack')
	if(direction == 'next') {
		images.each(function() {
		    if ($(this).css('z-index') == images.length - 1) {
				moveImage($(this), -1);
		    }
		});
	} else {
		images.each(function() {
		    if ($(this).css('z-index') == 0) {
				moveImage($(this), 1);
		    }
		});
	}

	function moveImage(image, sign) {
		image.animate({ 
			left: "100%"
		}, 500, function() {
			changeZindex(sign);
		});
		image.animate({
			left: "20%"
		}, 500, function() {
			inAnimation = false;
		});
		
		function changeZindex(sign){
			var images = $('.stack');
			images.each(function(){
				var z = $(this).css('z-index');
				$(this).css('z-index', (parseInt(z)-sign+images.length)%images.length);
			});	
		}
	}
}

function setupImages() {
	var i = -1;
	inAnimation = false;
	$('.stack').each(function(){
		var minRot = 0;
		var maxRot = 10;
		i++;
		var rot = Math.ceil((Math.random()*maxRot)+minRot);
		$(this).css({
			'transform':'rotate('+rot+'deg)',
			'z-index': i 
		});
	})
}

$(document).ready(function() {
	$('#control a').click(function(e) {
		if(!inAnimation) {
			inAnimation = true;
			shuffleImages(e.target.id);
			e.preventDefault();
		}	
	});	
});

setupImages();