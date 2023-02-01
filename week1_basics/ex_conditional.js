var age=10
if(age>=65){
    console.log("You get your income from your pension")
}else if(age<65 && age>=18){
    console.log("Each month you get a salary")
}else if(age<18){
     console.log("You get an allowance")
}else{
    console.log("value entered is not numerical")
}


//switch statement code days of the week

var days="sunday"
switch(days){
    case "monday":
        console.log("day 1")
        break;
    case "tuesday":
            console.log("day 2")
            break;   
    case "wednesday":
                console.log("day 3")
                break;
    case "thursday":
                console.log("day 4")
                break;
    case "friday":
                console.log("day 5")
                    break;
    case "saturday":
                console.log("day 6")
                        break;
    case "sunday":
                console.log("day 7")
                break;
    default:
        console.log("no such day")
}