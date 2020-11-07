// define languages
langs = [];

langs.push({
	name: "JavaScript",
	name_lower: "javascript",
	year: 1995,
	depth: 1,
});

langs.push({
	name: "Java",
	name_lower: "java",
	year: 1995,
	depth: 0,
});

langs.push({
	name: "Python",
	name_lower: "python",
	year: 1991,
	depth: 0,
});

langs.push({
	name: "C",
	name_lower: "c",
	year: 1972,
	depth: 0,
});

langs.push({
	name: "C#",
	name_lower: "csharp",
	year: 2000,
	depth: 0,
});

langs.push({
	name: "C++",
	name_lower: "cpp",
	year: 1985,
	depth: 0,
});

// link images
for (lang of langs) {
	lang.img = new Image();
	lang.img.src = "imgs/" + lang.name_lower + ".png";
}