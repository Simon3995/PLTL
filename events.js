window.onload = function() {
	div.width = window.innerWidth;
	div.scrollLeft = c.width-div.width;
	divScroll = div.scrollLeft;
}

window.onresize = function() {
	div.width = window.innerWidth;
}

div.onwheel = function(evt) {
	div.scrollLeft += evt.deltaY;
}