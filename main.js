let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

ctx.strokeStyle = "white";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(c.width, c.height);
ctx.moveTo(0, c.height);
ctx.lineTo(c.width, 0);
ctx.stroke();