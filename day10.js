
function main() {
    const n = parseInt(readLine().trim(), 10);
    var convertToBinary = n.toString(2);//Converts decimal number to binary number
    var inputSplit = convertToBinary.split("");//We split it so that we can operate on each of them.
    var counterConsecutive = 0;//counter that will increment in succession
    var maxConsecutive = 0;//counter that checks the maximum status requested from us
    for(let i = 0; i<inputSplit.length; i++){
        if(inputSplit[i]==1){
            counterConsecutive++;//When we see 1 while checking in the array, the counter Consecutive increases
        }else{
            if(counterConsecutive>maxConsecutive)
            maxConsecutive = counterConsecutive;
            counterConsecutive = 0;
        } //In this else part, while checking the 1s in the array, if it encounters a 0, it is provided to act on the counter maxConsecutive.
    }
    if(counterConsecutive>maxConsecutive){
        maxConsecutive = counterConsecutive;
    }// here, in the above case, if it does not see 0 afterwards, it comes into play and its counter is set to maxConsecutive.
    console.log(maxConsecutive);
    
}
    
