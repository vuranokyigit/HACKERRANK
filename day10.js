/*'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

*/

function main() {
    const n = parseInt(readLine().trim(), 10);
    var binaryItN = n.toString(2);
    var binarySplitN = binaryItN.split("");
    var counterConsecutive = 0;
    var maxConsecutive = 0;
    for(let i = 0; i<binarySplitN.length; i++){
        if(binarySplitN[i]==1){
            counterConsecutive++;
        }else if(binarySplitN[i] == 0){
            if(counterConsecutive>maxConsecutive)
            maxConsecutive = counterConsecutive;
            counterConsecutive = 0;
        } 
    }
    if(counterConsecutive>maxConsecutive){
        maxConsecutive = counterConsecutive;
    }
    console.log(maxConsecutive);
    
}
    
