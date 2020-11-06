let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let div = document.getElementById("maindiv");

update();
function update() {
	ctx.clearRect(0,0,c.width,c.height);
	drawYearLines();
	
	window.requestAnimationFrame(update);
}

function drawYearLines() {
	ctx.strokeStyle = "#fff3";
	ctx.fillStyle = "#fff3";
	ctx.font = "30px Verdana";
	for (let i=0; i<81; i++) {
		ctx.beginPath();
		ctx.moveTo(c.width/81 * i, 0);
		ctx.lineTo(c.width/81 * i, c.height);
		ctx.stroke();
		
		ctx.fillText(1940+i, c.width/81*i + 10, 35);
	}
}