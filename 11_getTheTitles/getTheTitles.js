const getTheTitles = function (array) {
    return array.map((book) => book.title)
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

const array = books;
getTheTitles(array)
// Do not edit below this line
module.exports = getTheTitles;
