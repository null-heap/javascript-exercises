const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0)  return "ERROR";
 let startNumber = Math.min(num1,num2);
 let endNumber = Math.max(num1,num2);
 let sum = 0;
 for(startNumber; startNumber <= endNumber; startNumber ++){
    sum+= Number(startNumber);
 }
 return sum
};

// Do not edit below this line
module.exports = sumAll;
