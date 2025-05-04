// const removeFromArray = function (array, ...elementForDeleting) {
//     array.forEach(element => {
//         const editedArray = array.filter((element) => element !== elementForDeleting)
//         return editedArray;
//     });
// }
// removeFromArray([1, 2, 3, 3, 4], 3, 2)

const removeFromArray = function (array, ...elementsForDeleting) {
    const newArray = array.filter((element) => !elementsForDeleting.includes(element));
    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
