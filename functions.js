"use strict";

let fahr = random(60, 120);

let celsius = fahrenheitToCelsius(fahr).toFixed(2);
fahr = celsiusToFahrenheit(celsius).toFixed(0);

print(`${fahr}F = ${celsius}C`);
print(`${celsius}C = ${fahr}F`);

let f = f2c2f(fahr);
console.log(f);

celsiusToFahrenheit(250);

let factr = 10;
let fact =  factorial(factr);
print(`Factorial ${factr}! = ${fact}`)

function f2c2f(fahrenheit) {
    let celsius = fahrenheitToCelsius(fahrenheit);
    let fahr = celsiusToFahrenheit(celsius);

    return fahr;
}
function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function print(text) {
    console.log(text);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
