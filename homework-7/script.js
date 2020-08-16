"use strict"


// Task #1
const arr1 = [
    {
        name: "John",
        gender: "male",
        birthYear: 1990,
    },
    {
        name: "Mary",
        gender: "female",
        birthYear: 1980,
    },
    {
        name: "Sam",
        gender: "male",
        birthYear: 1999,
    },
    {
        name: "Ivan",
        gender: "male",
        birthYear: 1991,
    },
    {
        name: "Anna",
        gender: "female",
        birthYear: 1995,
    },
    {
        name: "Nick",
        gender: "male",
        birthYear: 1972,
    },
    {
        name: "Jane",
        gender: "female",
        birthYear: 2005,
    },
];


const newArr = arr1.map((el, i) => {
    el.index = i;
    return el;
});

console.log("New array with objects with 'index' added -", newArr);


function findMaxGender(arr) {
    const maleCount = arr.reduce((acc, cur) => cur.gender === "male" ? ++acc : acc, 0);
    switch(true) {
        case maleCount > (arr.length - maleCount):
            return "male";
        case maleCount < (arr.length - maleCount):
            return "female";
        default:
            return "equal";
    }
}

console.log("Max gender -", findMaxGender(arr1));


//////////////////////////////////////////


// Task #2
const arr2 = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];

const resultObj = arr2.reduce((acc, cur) => {
    if (!acc.hasOwnProperty(cur)) {
        acc[cur] = 1;
    } else {
        ++acc[cur];
    }
    return acc;
}, {});

console.log("Object with unique elements count -", resultObj);


//////////////////////////////////////////


// Task #3
function swapKeyVal(obj) {
    const tempArr = Object.entries(obj);
    const newObj = {};
    tempArr.forEach(el => { newObj[el[1]] = el[0] });
    return newObj;
}

console.log("Object with swapped keys and values -", swapKeyVal( {name: 'mykola', age: 56} ));