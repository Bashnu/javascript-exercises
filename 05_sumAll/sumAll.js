const sumAll = function (num1, num2) {
    let smallestNum, biggestNum;
    
    if(!Number.isInteger(num1) ||!Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (num1 < num2) {
        smallestNum = num1;
        biggestNum = num2;
    } else {
        smallestNum = num2;
        biggestNum = num1;
    }
    sum = 0

    for (let i = smallestNum; i <= biggestNum; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
