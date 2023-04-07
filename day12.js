

class Student extends Person {
    //we declare a class Student and we wanted the inheritance other data from Person class for we use 'extends' method.

    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }

    calculate() {

        var sumScores = this.scores.reduce((accScores, num) => {

            accScores += num;
            return accScores;

        });//the code iterates through each element in the "scores" array,
        //adds it to an accumulator variable called "accScores",
        //and then returns the final value of the accumulator after all elements have been processed. 
        //The resulting summary is stored in the variable "sumScores"
        var numScores = this.scores.length;
        var averageScore = sumScores / numScores;

        if (averageScore >= 90) {
            return "O"
        } else if (averageScore >= 80) {
            return "E";
        } else if (averageScore >= 70) {
            return "A";
        } else if (averageScore >= 55) {
            return "P";
        } else if (averageScore >= 40) {
            return "D";
        } else {
            return "T";
        }
    }
}
