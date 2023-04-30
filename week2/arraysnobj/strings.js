var vegs=["onion","parsley","pepper"]
for(var i=0;i<vegs.length;i++){
    console.log(vegs[i])
}
var gos="hello"
for(var i=0;i<gos.length;i++){
    console.log(gos[i])
}

var greet="harry potter";
console.log(greet.length);//size of string
console.log(greet.charAt(0));//greet[0]

//concat method

console.log("wo".concat("men").concat("☕"));

//Indexof method

console.log("ho-ho-ho".indexOf('h'));
console.log("ho-ho-ho".indexOf('-')); //returns the locations of the first position that
//matches the character
 
//lastIndexOf  - last index of the matching charaacter

console.log("ho-ho-ho".lastIndexOf("ho-ho"));

//split method - similar to the one in python

console.log("ho-ho-ho".split("-"));  // chops the string into an array of sub strings

//Changing the casing of index

console.log(greet.toUpperCase());
console.log(greet.toLowerCase());

