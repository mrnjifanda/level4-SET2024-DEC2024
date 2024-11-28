const fs = require('fs');
let result = '';

function whenDataExist(error, data) {

    if (error) {
        console.log('You error: ' + error);
    } else {
        console.log('Read data ok: ' + data);
    }
}

fs.readFile('./2024-09-27/data.txt', 'utf8', whenDataExist);




// fs.readFile('./2024-09-27/data.txt', 'utf8', function (error, data) {
//     if (error) {
//         console.log(error); 
//     } else {
//         console.log(data);
//         result = data;
//     }
// });

// console.log('result: ' + result);
