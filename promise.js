"use strict";

let testPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('Proslo je 5 sekundi');
    }, 5000);
});

testPromise.then(
    function(value) {
        console.log(`Fullfilled: ${value}`);
    },
    function(error) {
        console.log(`Fail: ${error}`);
    }
);
