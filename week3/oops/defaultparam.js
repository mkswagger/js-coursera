class Nodefaultparams{
    constructor(num1,num2,num3,str1,bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.str1 = str1;
        this.num3 = num3;
        this.bool1 = bool1;

    }
    calculate(){
        if(this.bool){
            console.log(this.str1,this.num1+this.num2+this.num3);
            return;
        }
        return "the value of bool1 is false";

    }
}
 var fail= new Nodefaultparams(1,2,3,false);
 fail.calculate();

 class withdefaultparams{
    constructor(num1=3,num2=4,num3=5,str1="Result",bool1=true){
        this.num1 = num1;
        this.num2 = num2;
        this.str1 = str1;
        this.num3 = num3;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.str1,this.num1+this.num2+this.num3);
            return;
        }
        return "the value of bool1 is false";

    }
 }

 var better= new withdefaultparams();
 better.calculate();