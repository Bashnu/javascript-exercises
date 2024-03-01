const removeFromArray = function(myArray, ...numberToRemove) {
return myArray.filter(ele => !numberToRemove.includes(ele))
};

// Do not edit below this line
module.exports = removeFromArray;
