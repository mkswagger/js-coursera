// var addTwoNums = function(a,b){
//     console.log(a+b);
// }
// addTwoNums(5,"5");


// function addTwoNums(a,b){
//     try{
//         console.log(a+b);
//     }catch(err){
//         console.log(err);
//     }

// }
// addTwoNums(5,"5");


function addTwoNums(a,b){
    try{
        if(typeof(a)!="number"){
            throw new ReferenceError("the first arg is not a number");}
        else if(typeof(b)!="number"){
            throw new ReferenceError("the second arg is not a number");}
        else{
            console.log(a+b);
        }

    }catch(err){
        // console.log(err);
        console.log("ERROR!",err);
    }
}

addTwoNums(5,"5");
