'use struct';

// String
let a = "Odgovor na sve je '42'";
let b = 'Odgovor na sve je "42"';
let c = 'Rodjen je \'45';
let d = "Precnik gume je 20\"";
console.log(a, b, c, d);

let aaaa;
let e = 51;
let f = "Duzina puta je " + e + " kilometar.";
console.log(f);
let g = `Duzina puta je ${aaaa} kilometar.`;
console.log(g);

// Number
let pi = 3.14;
let r = 42;
let x = 123e5;
let y = 456e-5;

console.log(pi, r, x, y);
console.log(pi - r);

let h = true;
let i = false;

console.log(h, i);

let evenNumbers = [ 2, 4, 6, 8, 10 ];
let oddNumbers = [ 1, 3, 5, 7, 9 ];

console.log(evenNumbers[0]);

let mixedArray = [ 5, "Tekst", [1, 2, 3], 0];

console.log(mixedArray);

let multidimensionalArray = [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ],
    [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [
        [
            31, 31, 33, 34, 35
        ],
        [
            36, 37, 38, 39, 40
        ]
    ]
];

console.log(multidimensionalArray[3][1][2]);
let dimension1 = multidimensionalArray[3];
let dimension2 = dimension1[1];
let dimension3 = dimension2[2];
console.log(dimension3);

for (i = 0; i < evenNumbers.length; i++) {
    console.log(evenNumbers[i]);
}

let niz1 = [ 'Don', 'DOn',  'Alice', 'Charlie', 'Bob', 'brian' ];

niz1.sort();

console.log("Sorted = " + niz1);

niz1.reverse();

console.log("Reversed = " + niz1);

let niz2 = [ 'Elisabeth', 'Gary', 'Frank', 'Ian' ];

let niz3 = niz1.concat(niz2);
niz3.sort();

console.log(niz3.toString());
console.log(niz3.join(', '));

let lastElement = niz3.pop();
niz3.push('Beverly');
console.log(niz3.join(', '));
console.log("Popped value = " + lastElement);

let firstElement = niz3.shift();
niz3.unshift('Ana');
console.log(niz3.join(', '));
console.log("Shifted value = " + firstElement);

niz3[0] = 'Alice';
console.log(niz3.join(', '));
console.log(niz3.length);

delete niz3[3];
console.log(niz3);
console.log(niz3.length);

let fruits = [ 'Jabuka', 'Banana', 'Sljiva', 'Visnja' ];
console.log(fruits);
fruits.splice(1, 1, 'Kajsija', 'Ananas', 'Breskva');
console.log(fruits);
let deleted = fruits.splice(2, 1)
console.log(fruits);
console.log('deleted = ' + deleted);

let fruits2 = fruits.slice(2, 10);
console.log(fruits);
console.log(fruits2);
