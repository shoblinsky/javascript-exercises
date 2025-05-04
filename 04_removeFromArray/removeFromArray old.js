const removeFromArray = function (array, ...elemetForDeleting) {
    const editedArray = array.filter((element) => element !== elemetForDeleting)
    return editedArray;
}
removeFromArray([1, 2, 3, 3, 4], 3, 2)