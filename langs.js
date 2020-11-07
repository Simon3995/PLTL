// define languages
langs = [];

langs.push({
	name: "JavaScript",
	name_lower: "javascript",
	year: 1995,
});

langs.push({
	name: "Java",
	name_lower: "java",
	year: 1995,
});

// link images
for (lang of langs) {
	lang.img = new Image();
	lang.img.src = "imgs/" + lang.name_lower + ".png";
}