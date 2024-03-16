const reverseString = function(input) {
    let result = "";
    while(input.length > 0){
        result += input.slice(input.length - 1,input.length);
        input = input.slice(0,input.length - 1);
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
