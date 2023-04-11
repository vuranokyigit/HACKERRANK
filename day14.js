function main() {
    // Enter your code here
    let inputArray = inputLines; //we are taking data as array[string]
    let inputSplit = inputArray[1].split(' ');//splitted 
    
    for (var i = 0; i < inputSplit.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (inputSplit.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (inputSplit[j] > inputSplit[j + 1]) {
  
                // If the condition is true
                // then swap them
                var temp = inputSplit[j]
                inputSplit[j] = inputSplit[j + 1]
                inputSplit[j + 1] = temp
            }
        }
    }// want to use bubble sorting method because of more dunamically and clear codding.
    let convertNumberInput = inputSplit.map(Number);//convert array's inside  to number
    let maxValueInputArray = Math.max(...convertNumberInput);//max value in array
    let minValueInputArray = Math.min(...convertNumberInput);//min value in array
    console.log(maxValueInputArray - minValueInputArray);//difference between maximum value in array and minimum value in array
    
    
    
    
}