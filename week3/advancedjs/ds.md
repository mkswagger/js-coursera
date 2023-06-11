Working with Objects in JavaScript
A lot of the information on how to work with objects in JavaScript has already been covered in this course.

The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:


const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)
This is the result of executing the above code:  

['speed',100,'color','yellow']

Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in from a third-party data provider and all you can do is code your program so that it consumes it. You'll learn more about the interchange of data on the web when you learn about JSON (JavaScript Object Notation).

Working with Maps in JavaScript
To make a new Map, you can use the Map constructor:


new Map();
A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

For example:

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
Here's the console output:  


Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
To get a specific value, you need to use the get() method. For example:  

1
bestBoxers.get(1); // 'The Champion'
Working with Sets in JavaScript
A set is a collection of unique values.

To build a new set, you can use the Set constructor:


new Set();
The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.


const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
The above code outputs the following in the console:  

{'apple', 'pear', 'plum'}
Other data structures in JavaScript
Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures that have not been covered include:

Queues

Linked lists (singly-linked and doubly-linked)

Trees

Graphs

For resources on building these data structures, please refer to the additional reading.