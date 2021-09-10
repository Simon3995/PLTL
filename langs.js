// define languages
langs = [];

langs.push({
	name: "Zig",
	name_lower: "zig",
	year: 2016,
	depth: 0,
});

langs.push({
	name: "Crystal",
	name_lower: "crystal",
	year: 2014,
	depth: 0,
});

langs.push({
	name: "Swift",
	name_lower: "swift",
	year: 2014,
	depth: 1,
});

langs.push({
	name: "Julia",
	name_lower: "julia",
	year: 2012,
	depth: 0,
});

langs.push({
	name: "Elixir",
	name_lower: "elixir",
	year: 2011,
	depth: 0,
});

langs.push({
	name: "Rust",
	name_lower: "rust",
	year: 2010,
	depth: 0,
});

langs.push({
	name: "Go",
	name_lower: "go",
	year: 2009,
	depth: 0,
});

langs.push({
	name: "Nim",
	name_lower: "nim",
	year: 2008,
	depth: 0,
});

langs.push({
	name: "F#",
	name_lower: "fsharp",
	year: 2005,
	depth: 0,
});

langs.push({
	name: "C#",
	name_lower: "csharp",
	year: 2000,
	depth: 0,
});

langs.push({
	name: "Java",
	name_lower: "java",
	year: 1995,
	depth: 0,
});

langs.push({
	name: "JavaScript",
	name_lower: "javascript",
	year: 1995,
	depth: 1,
});

langs.push({
	name: "PHP",
	name_lower: "php",
	year: 1995,
	depth: 2,
});

langs.push({
	name: "Ruby",
	name_lower: "ruby",
	year: 1995,
	depth: 3,
});

langs.push({
	name: "Lua",
	name_lower: "lua",
	year: 1993,
	depth: 0,
});

langs.push({
	name: "Python",
	name_lower: "python",
	year: 1991,
	depth: 0,
});

langs.push({
	name: "Haskell",
	name_lower: "haskell",
	year: 1990,
	depth: 0,
});

langs.push({
	name: "Bash",
	name_lower: "bash",
	year: 1989,
	depth: 0,
});

langs.push({
	name: "Perl",
	name_lower: "perl",
	year: 1988,
	depth: 0,
});

langs.push({
	name: "C++",
	name_lower: "cpp",
	year: 1985,
	depth: 0,
});

langs.push({
	name: "C",
	name_lower: "c",
	year: 1972,
	depth: 0,
});

langs.push({
	name: "Fortran",
	name_lower: "fortran",
	year: 1957,
	depth: 0,
});

// link images
for (lang of langs) {
	lang.img = new Image();
	lang.img.src = "imgs/" + lang.name_lower + ".png";
}