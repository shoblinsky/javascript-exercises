const reverseString = function (string) {
    let temporaryString = '';
    for (i = 1; i <= string.length; i++) {
        temporaryString += string.at(-i);
    }
    return temporaryString;
};

// Do not edit below this line
module.exports = reverseString;
