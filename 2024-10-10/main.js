const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const indexRoute = require('./routes/index.route');
app.use('/', indexRoute);

app.listen(port, () => {
    console.log("Application listening on port: " + port);
    
});
