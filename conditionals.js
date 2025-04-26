"use strict";

let x = 2;
let y = 4;

//    false && true
if (x === 1 && y > 2) {
    console.log("X je 1!");
} else if (x === 2) {
    console.log("X je 2!");
} else if (x > 2) {
    console.log("X je >2!");
} else {
    console.log('Uslov nije ispunjen');
}

console.log('Nastavak');

switch (new Date().getDay()) {
    case 6:
    case 0:
        console.log('Vikend');
        break;
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Sreda');
        break;
    default:
        console.log('Neki drugi dan');
}

console.log('Switch end');

console.log(new Date());