//prototype model - base class is called prototype

var bird={
    hasWings: true,//properties of bird
    canFly: true,
    hasfeathers: true,
}

var eagle1= Object.create(bird)

console.log(eagle1)
console.log(eagle1.hasWings)
console.log(eagle1.hasfeathers)
console.log(eagle1.canFly)

var penguin= Object.create(bird)
penguin.canFly=false;
