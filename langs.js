langs = [];

langs.push({
	name: "JavaScript",
	name_lower: "javascript",
	year: 1995,
});

for (lang of langs) {
	lang.img = new Image();
	lang.img.src = "imgs/" + lang.name_lower + ".png";
}