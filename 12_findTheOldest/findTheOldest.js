const findTheOldest = function (array) {
    return array.map((objects) => objects.yearOfBirth.yearOfDeath)
};
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

findTheOldest(people)
let ageFi = people[0].yearOfDeath - people[0].yearOfBirth;
let ageSe = people[1].yearOfDeath - people[1].yearOfBirth;
let ageTh = people[2].yearOfDeath - people[2].yearOfBirth;

console.log(ageFi)
console.log(ageSe)
console.log(ageTh)
// Do not edit below this line
module.exports = findTheOldest;
