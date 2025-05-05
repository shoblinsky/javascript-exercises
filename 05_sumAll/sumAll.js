const sumAll = function (start, finish) {
    let sum = 0;
    if (start < 0 || finish < 0) return 'ERROR';
    if ((!Number.isInteger(start) || !Number.isInteger(finish))) return 'ERROR';
    if ((Number.isNaN(start)) || (Number.isNaN(finish))) return 'ERROR';
    if (start > finish) {
        for (i = finish; i <= start; i++) {
            sum += i;
        }
        return sum
    }
    for (i = start; i <= finish; i++) {
        sum += i;
    }

    return sum
};
// sumAll(2, 4);

// // // Do not edit below this line
module.exports = sumAll;
