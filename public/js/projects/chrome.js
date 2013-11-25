var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];
var cols = 2;

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
	windowWidth = $('#chrome-container').width();
	colWidth = $('.block').outerWidth();
	blocks = [];
	colCount = Math.floor((windowWidth/(colWidth+margin*2)) / cols) * cols;
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.block').each(function(){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = margin+(index*(colWidth+margin))+(windowWidth/12);
		$(this).css({
			'left':leftPos+'px',
			'top':min+'px'
		});
		blocks[index] = min+$(this).outerHeight()+margin;
	});	
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

setupBlocks();