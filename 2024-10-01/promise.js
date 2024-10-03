// const maPromise = new Promise((resolve, reject) => {

//     let action = true;
//     if (action) {
//         resolve('Success');
//     } else {
//         reject('Error !!!')
//     }
// });

// maPromise
//     .then(result => {
//         console.log("Result: " + result);
//     })
//     .catch(error => {
//         console.log("Error: " + error);
//     });

// const fs = require('fs');

// fetch("https://www.google.com")
//     .then(result => result.text())
//     .then(text => {
  
//         fs.writeFile('home.html', text, (err) => {
//             if (err) throw err;
//             console.log('The HTML file has been saved!');
//         });
//     })
//     .catch(function(error) {
//         console.log(error);
//     });


const fs = require('fs').promises;
async function createGoogleClone() {
    const request = await fetch('https://www.google.com');
    const response = await request.text();
    const createFile = await fs.writeFile('home-2.html', response);
    console.log('Okay');
    
}

createGoogleClone();