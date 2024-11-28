const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {

    res.cookie('username', 'Admin', {
        maxAge: 1000*60*10,
        httpOnly: true
    });
    res.json({
        message: 'Bro, i send you a cookie !!!'
    });
});

app.get('/get-cookie', (req, res) => {

    const username = req.cookies.username;
    res.json({
        message: 'You send me this cookie? ' + username
    })
});

app.get('/delete-cookie', (req, res) => {

    res.clearCookie('username');
    res.json({
        message: 'Cookie username clear'
    })

});

app.listen(4000, () => {

    console.log('Application running on 4000');
})