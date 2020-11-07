// scrolling div containing wide canvas
let div = document.getElementById("maindiv");

// set correct div width
window.onload = function() {
	div.width = window.innerWidth;
	div.scrollLeft = c.width-div.width+30;
	divScroll = div.scrollLeft;
}

// change div width with page resize
window.onresize = function() {
	div.width = window.innerWidth;
}

// allow left and right scrolling
div.onwheel = function(evt) {
	div.scrollLeft += evt.deltaY;
}