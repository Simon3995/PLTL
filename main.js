// define canvas and context
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// main loop
function update() {
	ctx.clearRect(0,0,c.width,c.height);
	drawYearLines();
	drawLangs();
	
	window.requestAnimationFrame(update);
}
update();

// draw lines and text for years
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

// draw language logos
function drawLangs() {
	ctx.fillStyle = "white";
	ctx.font = "15px Verdana";
	for (let lang of langs) {
		ctx.drawImage(
			lang.img,
			(lang.year - 1940) * 100 + 20,
			50,
			60,
			60
		);
	}
}