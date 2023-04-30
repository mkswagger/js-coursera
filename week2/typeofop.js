//evaluates the parameter and returns the type as a string


// var test= typeof("whats is this?");//op string
// var test= typeof(10);// op number
// var test= typeof(3.14); // op number
//var test= typeof(true);// op boolean

var test= typeof(1<2); //op boolean

var test = typeof([1,2,3]); //op object

var test= typeof({firstprop : 1});// op object

var test = typeof(function abc(){ console.log("abc");}); // op function s
console.log(test);