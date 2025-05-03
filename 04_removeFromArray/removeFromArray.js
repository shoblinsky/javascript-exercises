// ([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
// const removeFromArray = function (array, element) {
//     const newArray = [];
//     array.forEach(num => {
//         if (num != element) {
//             num.push(...newArray)
//         }
//         return newArray
//     })
//     return newArray
// };

const removeFromArray = function (array, elemetForDeleting) {
    const editedArray = array.filter((element) => element !== elemetForDeleting)
    return editedArray;
}


removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
