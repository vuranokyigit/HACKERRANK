function Calculator(n,p){

    this.power=power; //declare with this to 'power'
         function power(n,p){//are interested in two parameters 'n' , 'p'
            if(n<0 || p<0){//n and p should be non-negative
                let ans = "n and p should be non-negative";
                return ans;
            }else{
                return Math.pow(n,p);//with this method get power two numbers.
            }
        }
    }