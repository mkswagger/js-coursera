//obj,arryas,maps,sets

//Arrays
//1)forEach 
//2)filter
//3)map

//forEach - accepts a method that ll work on every function

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//filter - filters the array based on a specific test

const nums=[1,2,3,4,5]
nums.filter( function(num){
    return num>2;
})

//map - map each array item over to another array's item based on
//whatever work is performed inside the function

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})





