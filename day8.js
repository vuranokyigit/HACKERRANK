function processData(input) {
    //Enter your code here
    
    var inputSplit = input.split('\n');
    var inputDataValue = inputSplit[0];
    
    var phoneBook = new Map();
    for(let i=1; i<=parseInt(inputDataValue); i++){
        var stabil = inputSplit[i];
        phoneBook[inputSplit[i]];
        phoneBook.set(stabil.split(" ")[0], stabil.split(" ")[1]);
        
    }  
    for(let j=parseInt(inputDataValue)+1; j<inputSplit.length; j++){
        var query = inputSplit[j];
        if(phoneBook.has(query)){
            console.log(query + "=" + phoneBook.get(query));
        }else{
            console.log("Not found")
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
