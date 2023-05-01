try{
    throw new Error();
}catch(err){//accepts error 
    console.log(err);
}
console.log("this line is fine");