class Student extends Person {
    
    constructor (firstName, lastName, id, scores){
        super(firstName, lastName, id);
        this.scores = scores;
        }
calculate(){
var sum = this.scores.reduce((acc, num) => {
      acc += num;
      return acc;
    });
    var numScores = this.scores.length;
    var averageScore = sum / numScores;
    if(averageScore>=90){
        return "O"
    }else if(averageScore>=80){
        return "E";
    }else if(averageScore>=70){
        return "A";
    }else if(averageScore>=55){
        return "P";
    }else if(averageScore>=40){
        return "D";
    }else{
       return "T";
    }
  
    }
  
}
