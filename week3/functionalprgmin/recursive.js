// calling the function itself is recursion

let counter= 3;
function example(){
    console.log(counter);
    counter-=1;
    if(counter==0) return ;
    example();
}
example();

//scope - which parts are accessible and whohc arent

//global local
//global outside of the function
//local -inside of the function
