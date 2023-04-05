
function main() {

    let arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        //was created an array as 2d included rows and columns.
    }
    var sumElementHourGlasses = [];//created an empty array for summary of hourglass elements

    var numberOfHourGlasses = 0;
    for (var i = 0; i < 4; i++) {//outline loop for rows checking
        for (var j = 0; j < 4; j++) {//inline loop for columns checking
            sumElementHourGlasses[numberOfHourGlasses] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
                + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1]
                + arr[i + 2][j + 2];// six different number is included four seperated,and sum each array element.
            numberOfHourGlasses++;//after each loop ,pass the another hourglass
        }
    }

   sumElementHourGlasses.sort();// sorted the sum of hourglasses from largest to smallest with the sort method

    var sumMax = -100000000;//assumed that the total cannot be more than this number.
    for (var x = 0; x < 16; x++) {//for this input to consist of 16 different hourglass
        if (sumElementHourGlasses[x] > sumMax) {
            sumMax = sumElementHourGlasses[x];
        }
    }

    console.log(sumMax);

}

