function letterfinder(word,match){
    for(var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log("found the",match,"at",i)
        }
        else{
            console.log("no match found")
        }
    }
}
letterfinder("test","t")