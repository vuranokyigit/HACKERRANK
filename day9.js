
function factorial(n) {
    if (n<0){
        console.log("Math Error"); // n cannot be negative
        return n;
    }else if(n<=1){
        return 1;//Factorial always returns 1 when 0 or 1
    }else{
        for(let i=n-1; i>=1; i--){
            n = n * i;//It is to multiply each number by one less of itself (up to 1) according to the factorial rules.
        }
        return n;
    }
    
}
