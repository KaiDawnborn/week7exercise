var tInsert = document.getElementById("text-insert");
	tInsert.innerText = "Here's some text supplied by JavaScript.";
var echo = document.getElementById("echo")

function valueStore() {
	var sValue = document.getElementById("clicky").value;
	console.log(sValue);
	echo.innerText = sValue;
}

var stringy = ["Hello!", "Goodbye!", "Yes!", "No.", "Maybe?"];

for(i=0; i<stringy.length; i++) {
	console.log(stringy[i])
}

var thing = {
	name: "pumpkin",
	color: "orange",
	size: "medium"
};

console.log(thing.name);
console.log(thing.color);
console.log(thing.size);

var tName = document.getElementById("thing-name");
var tColor = document.getElementById("thing-color");
var tSize = document.getElementById("thing-size");

	tName.innerText = thing.name;
	tColor.innerText = thing.color;
	tSize.innerText = thing.size;

var things = [
	{
	name: "skeleton",
	color: "bone",
	size: "large"
	},
	{
	name: "spider",
	color: "black",
	size: "huge"
	},
	{
	name: "ghost",
	color: "spooky",
	size: "extraplanar"
	}
];

for(i=0; i<things.length; i++) {
	console.log(things[i].name);
	console.log(things[i].color);
	console.log(things[i].size);	
};	//needed to check completed file for this. PRACTICE LOOPING THROUGH ARRAY OBJECT PROPERTIES.

document.body.style.color = "red"