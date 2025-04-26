let add = 1 + 1;
let subtract = 5 - 1;
let multiply = 2 * 2;
let divide = 4 / 2;
let concat = "String1" + "String2";
let exponentiation = 2 ** 3;
let modulo = 5 % 2;

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("Broj " + i + " je paran.");
    }
}

let x = 2;
x++; // x++ je isto sto i  x = x + 1
++x;
console.log("x=" + x);
console.log("x++=" + x++);
console.log("x=" + x);
console.log("++x=" + ++x);

// x++
console.log(x);
x = x + 1;

// ++x
x = x + 1;
console.log(x);

let y = 3;
y--; // y-- je isto sto i y = y - 1
console.log(y);

// Logical operators
let izraz1 = 2 + 3;
let izraz2 = 3 + 3;

let logical1 = izraz1 > 4;
let logical2 = izraz2 > 4;

let logicalAnd = logical1 && logical2;
let logicalOr = logical1 || logical2
console.log('logical1 = ' + logical1);
console.log('logical2 = ' + logical2);
console.log('logical1 AND logical2 = ' + logicalAnd);
console.log('logical1 OR logical2 = ' + logicalOr);
console.log('NOT logical1 = ' + !logical1);
console.log('NOT logical2 = ' + !logical2);

// Comparison operators
let equals = 2 == '2.';
let equalsStrict = 2 === '2';
console.log('2 == 2 = ' + equals);
console.log('2 === 2 = ' + equalsStrict);
console.log('2 == 1+1 = ' + (2 == '1 + 1'));
console.log('2 === 1+1 = ' + (2 === '1 + 1'));

let notEqual = 2 != 4;
let notEqualStrict = 2 !== 4;
console.log('2 != 4 = ' + notEqual);
console.log('2 !== 4 = ' + notEqualStrict);

let greaterThan = 4 > 5;
let lowerThan = 4 < 5;
let greaterThanOrEqual = 4 >= 5;
let lowerThanOrEqual = 4 <= 5;

console.log('4 > 5 = ' + greaterThan);
console.log('4 >= 5 = ' + greaterThanOrEqual);
console.log('4 < 5 = ' + lowerThan);
console.log('4 <= 5 = ' + lowerThanOrEqual);

let condition = 8 > 4
let value1 = 'DA';
let value2 = 'NE';

let ternary = condition ? value1 : value2;

console.log('8 > 4 = ' + ternary);

let a = 2;
a += 3; // isto sto i a = a + 3;
a -= 1; // isto sto i a = a - 1;
a *= 2; // isto sto i a = a * 2;
a /= 3; // isto sto i a = a / 3;
a %= 2; // isto sto i a = a % 2;
a **= 3; // isto sto i a = a ** 3;




