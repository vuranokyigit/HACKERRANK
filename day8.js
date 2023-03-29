function processData(input) {
    
    var inputItSplit = input.split('\n');//
    var inputEnterNum = inputItSplit[0];
    
    var phoneBook = new Map();
    for(let i=1; i<=parseInt(inputEnterNum); i++){
        var splittedTheInfo = inputItSplit[i];
        phoneBook[inputItSplit[i]];
        phoneBook.set(splittedTheInfo.split(" ")[0], splittedTheInfo.split(" ")[1]);//We selected and split the inputs that we separated as key and value with the set method.
        
    }  //we started the loop from 1 because we want the number three that comes first and is the number to be our delimiter. This is how we set our nerves.
    for(let j=parseInt(inputEnterNum)+1; j<inputItSplit.length; j++){
        var checkInfo = inputItSplit[j];
        if(phoneBook.has(checkInfo)){
            console.log(checkInfo+ "=" + phoneBook.get(checkInfo));//Here we check whether it is in
        }else{
            console.log("Not found")
        }
    }//the second loop was created to check the information entered from where we left off.continues from where the previous one left off until the end
} 


