function gettotal(a,b){
    return a+b;
}
var num1=4;
var num2=5;
console.log(gettotal(num1,num2));

//oop style

//grouping data and functionality as properties and methods inside the objects

var virtualpet={
    sleepy: true,
    nap: function(){
        this.sleepy = false;
    
    }
}
console.log(virtualpet.sleepy);
virtualpet.nap()
console.log(virtualpet.sleepy);

//first class functions

//pass value to oter functions
//save in a variable
//return from other functions

//Higher order functions

//accept other function as arguments
// it returns functions when invoked

