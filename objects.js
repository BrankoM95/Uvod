'use strict';

let osoba = {
    ime: 'Petar',
    prezime: 'Petrovic',
    starost: 41,
    oci: 'zelene'
};

console.log(osoba);

let thisIsUndefined;
let empty = null;

osoba.starost = null;

console.log(thisIsUndefined, empty);

console.log(osoba);