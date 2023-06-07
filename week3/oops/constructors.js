//constructors - building new objects 
//always capitalised

function icecream(flavour){
    this.flavour = flavour;
    this.meltit=function(){
        console.log("this $(this.flavour) melted");
    }
}

let kiwi = new icecream("kiwi");
console.log(kiwi)