function letterfinder(word,match){
    var condition1=typeof(word)=="string" && word.length>=2;
    var condition2 = typeof(match) == "string" && match.length==1;
    if(condition1&&condition2){
        for(var i=0;i<word.length;i++){
            if(word[i]==match){
                console.log("found the ",match,"at",i);
            }else{
                console.log("--no match found",i);
            }
        }
    
    }else{
        console.log("pls pass correct arguments");
    }
}
letterfinder([],[]);
letterfinder("cat","c");