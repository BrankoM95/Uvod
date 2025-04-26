"use strict";

let fruits = ['Apples', 'Oranges', 'Lemons', 'Cherries'];
// let counter;
//
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i} => ${fruits[i]}`);
//     counter = i;
// }
//
// console.log(`Petlja je gotova (i = ${counter})`);
//
// for (let fruit in fruits) {
//     console.log(`${fruit} => ${fruits[fruit]}`);
// }
//
// fruits.forEach(function(value, index, array) {
//     console.log(`fruits[${index}] = ${value}`);
// });
//
// fruits.forEach((value, index, array) => console.log(`arrow function => fruits[${index}] = ${value}`));
//
// fruits.forEach(printArrayValue);
//
// function printArrayValue(value, index, array) {
//     console.log(`printArrayValue => fruits[${index}] = ${value}`);
// }
//
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// let flag = true;
//
// while(flag) {
//     let rnd = random(1, 1000000);
//
//     console.log(rnd);
//     if (rnd >= 900000) {
//         flag = false;
//     }
// }
let i = 4;

while(i < fruits.length) {
    console.log(`${i} => ${fruits[i]}`);
    i++;
}

i = 4;
do {
    if (fruits[i] === undefined) {
        console.log('Break!');
        break;
    }

    console.log(`do..while : ${i} => ${fruits[i]}`);
} while (i < fruits.length);

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}