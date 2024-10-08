const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (request, response) => {
    response.send('Hello, world!');
});

app.get("/about-us", (request, response) => {
     
    fs.readFile('./views/index.html', 'utf8', (err, data) => {

        response.setHeader('Content-Type', 'text/html');
        response.send(data.toString());
    })
});

app.get("/blog/:id", (request, response) => {
    const id = request.params.id;

    response.send('Param is: ' + id);
});

app.get('/blog/:category/:subcategory', (request, response) => {
    const category = request.params.category;
    const subcategory = request.params.subcategory;

    response.send('Category is: '+ category +' and Subcategory is: '+ subcategory);
})

app.post('/users/create', (request, response) => {
    response.send('This is post request');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});