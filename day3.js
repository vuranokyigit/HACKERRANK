
'use strict';
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
function main() {
    const N = parseInt(readLine().trim(), 10);
    switch(true){
        case N%2 != 0 :
        console.log("Weird");
        break;
        case N%2 == 0 && N>=2 && N<=5:
        console.log("Not Weird");
        break;
        case N%2 == 0 && N>=6 && N<=20:
        console.log("Weird");
        break;
        case N%2 == 0 && N>20:
        console.log("Not Weird");
        break;
        default:
        break;
    }
    
    
}


