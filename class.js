"use strict";

class Person {
    #firstName;
    #lastName;
    #age;

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }

    setAge(age) {
        if (age > 0) {
            this.#age = age;
        }
    }

    getAge() {
        return this.#age;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}

const osoba = new Person("Petar", "Petrovic", 42);
const osoba2 = new Person("Petar", "Petrovic", 42);

osoba.setAge(-5);

console.log(osoba.getAge());
console.log(osoba.getFullName());

class MyMath {
    static add(num1, num2) {
        return num1 + num2;
    }

    static random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static factorial(number) {
        if (number === 0) {
            return 1;
        } else {
            return number * this.factorial(number - 1);
        }
    }
}

const mojaMatematika = new MyMath();

console.log(MyMath.factorial(10));