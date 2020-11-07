let div = document.getElementById("maindiv");

window.onload = function() {
	div.width = window.innerWidth;
	div.scrollLeft = c.width-div.width+30;
	divScroll = div.scrollLeft;
}

window.onresize = function() {
	div.width = window.innerWidth;
}

div.onwheel = function(evt) {
	div.scrollLeft += evt.deltaY;
}