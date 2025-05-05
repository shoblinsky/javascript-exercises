let isPalindrome = false;
const palindromes = function (string) {
    const nomenclature = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const preparedString = string.toLowerCase().split('').filter((letters) => (nomenclature.includes(letters))).join('')
    console.log(preparedString);
    const length = preparedString.length;
    console.log(length);
    for (let i = 0; i <= (length / 2); i++) {

        // if (preparedString[i] === preparedString.charAt(preparedString.length) - 1)
        if (preparedString[i] === preparedString[preparedString.length - i - 1]) {
            isPalindrome = true;
        } else {
            return false
        };
        // сначала нужно очистить строку от лишних символов
        // затем нужно получить её длину
        // после того, как длина получена, необходимо поделить её надвое
        // затем нужно пройтись со сравнением: символ i должен совпадать с символом с другого конца строки
        // увеличиваем на +1
        // если всё совпало, значит, строка -- паллиндром
    }
    return isPalindrome;
};

// palindromes('rar')
// Do not edit below this line
module.exports = palindromes;
