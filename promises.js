class MyRandom {
    static random(maxValue) {
        return Math.floor(Math.random() * maxValue);
    }
}

const prms = new Promise(function(resolvedCallback, rejectedCallback) {
    setTimeout(() => {
        const randomValue = MyRandom.random(10);
        if (randomValue > 3) {
            resolvedCallback({ success: true, value: randomValue })
        } else {
            rejectedCallback(`Promise rejected: ${randomValue}`);
        }
    },
    3500);
});

prms.then(function(value) {
    console.log('Promise is resolved');
    console.log(value.success);
    console.log(value.value);
}).catch(function(error) {
    console.log(`Promise rejected: ${error}.`)
});