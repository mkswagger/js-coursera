//programming paradigm - functional, oops

// ex of functional programming

var currencyone = 100;
var currencytwo = 0;
var exchangerate=1.2

function convertcurr(amount,rate){
    return amount*rate;
}

currencytwo = convertcurr(currencyone,exchangerate);
console.log(currencytwo);

