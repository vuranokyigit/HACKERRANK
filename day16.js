


function main() {
    const S = readLine();
    let parsing = parseInt(S);//all data convert string to number
    //To understand whether the input is nan or number
    try {
        console.log(parsing.toString().replace('NaN', 'Bad String'));//If you see NaN in the output, replace it with "Bad String".
    } catch (e) {
        console.log("Bad String")
    }

}