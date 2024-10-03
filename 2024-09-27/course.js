
console.log('Start');

const fruits = [ 'apple', 'orange', 'avocat', 'mango', 'banana', 'orange' ];
const results = {};

setTimeout(() => {
    for (let i = 0; i < fruits.length; i++) {

        const fruit = fruits[i];
        if (results[fruit]) {

            results[fruit] = results[fruit] + 1;
        } else {
            results[fruit] = 1;
        }
    }

    console.log('Loop', results);
}, 1000);

console.log('End', results);


