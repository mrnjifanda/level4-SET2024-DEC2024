var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    const posts = [
        { title: 'Hello world', content: 'AZERTY', author: 'John' },
        { title: 'Node.js programming', content: 'CODE', author: 'John' },
        { title: 'React.js', content: 'UI', author: 'Jane' },
        { title: 'MongoDB', content: 'DB', author: 'John' },
        { title: 'Docker', content: 'Containerization', author: 'Jane' },
        { title: 'AWS', content: 'Cloud', author: 'John' },
        { title: 'Python', content: 'AI', author: 'Jane' },
    ];
    res.render('forum', { 'posts': posts });
});

module.exports = router;
