//functions inside objects are methods
//FP APPROACH
var shoes= 100;
var statetax=1.2;

function totalprice(shoes, tax){
    return shoes*tax;
}
var topay = totalprice(shoes, statetax);

console.log(topay);

//OOP APPROACH

var purchase1={
    shoes: 100,
    statetax:1.2,
    totalprice : function(){
        var calculation = purchase1.shoes * purchase1.statetax;
        console.log(calculation);
    }
}

purchase1.totalprice();
//code resuability is high in objects 

//object.create() method  - used to create new objects

class animal{}

var mydog = Object.create(animal);
console.log(mydog);

// new method

var mycatto = new animal();

// Inheritance -extend function

class animal{};
class bird extends animal{};
class eagle extends bird{};

// Encapsulation -

"abc".toUpperCase(); // here the output alone is visible not the initial string

// polymorphism

const bicycle={
    bell : function(){
        console.log("ring ring")
    }
}

const door={
    bell: function(){
        console.log("ring ring")
    }}

bicycle.bell()
door.bell()

//making the code polymorphic

function ring(thing){
    console.log(thing.bell());
}
