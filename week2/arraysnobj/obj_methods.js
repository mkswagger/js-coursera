var car={};
car.color="red";
car.turnkey=function(){
    console.log("engine turning");
}
car.lightson=function(){
    console.log("lights on");
}
console.log(car);
car.turnkey();
car.lightson();