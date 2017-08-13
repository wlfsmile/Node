var fortuneCookies = [
	"Conquer youe will conquer you.",
	"222",
	"333",
	"444",
	"555",
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx];
};