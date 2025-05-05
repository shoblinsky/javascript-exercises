// const findTheOldest = function (array) {
//     return array.map((objects) => objects)
// };
// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912, 
//         yearOfDeath: 1941,
//     },
// ]

// findTheOldest(people)
// let ageFi = people[0].yearOfDeath - people[0].yearOfBirth;
// let ageSe = people[1].yearOfDeath - people[1].yearOfBirth;
// let ageTh = people[2].yearOfDeath - people[2].yearOfBirth;

// console.log(ageFi)
// console.log(ageSe)
// console.log(ageTh)

// const SECONDfindTheOldest = function (array) {
//     return array.map((objects) => objects)
// };




// SECONDfindTheOldest(people)

const findTheOldest = function (array) {

    return array.reduce((accum, currentPeople) => {
        const perviousPeopleAge = getPupilsAge(accum.yearOfBirth, accum.yearOfDeath);
        const nextPeopleAge = getPupilsAge(currentPeople.yearOfBirth, currentPeople.yearOfDeath);
        if (perviousPeopleAge < nextPeopleAge) {
            return currentPeople;
        }
        else {
            return accum
        };
    }
    )
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


const CURRENT__YEAR = new Date().getFullYear();
const getPupilsAge = function (yearOfBirth, yearOfDeath) {
    if (yearOfDeath === undefined) {
        yearOfDeath = CURRENT__YEAR;
    }
    return yearOfDeath - yearOfBirth;
}

// findTheOldest(people)


// Do not edit below this line
module.exports = findTheOldest;


