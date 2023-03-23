function processData(input) {
    //Enter your code here
    var inputString = input.toString();
    var inputSplit = inputString.split("\n");
    
for (let j = 1; j < inputSplit.length; j++){ 
   
    var inputSplitToBy = inputSplit[j].split("");
    
    let resultOdd = [];
    let resultEven = [];
    
        for (let i = 0; i <= inputSplitToBy.length; i++) {
            if (i % 2 === 0) {
                resultOdd.push(inputSplitToBy[i]);
            } else {
                resultEven.push(inputSplitToBy[i]);
            }
        }
       console.log(resultOdd.join("")+ " " + resultEven.join(""));
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
