const express = require('express');
const app = express();
const port = 1100;
//includi posts
const posts = require('./posts.js')

app.get('/', (req, res) => {
    console.log('response to client was sent for /');

    res.send('server del blog-router')
})

app.get('/posts', (req, res) => {
    console.log('response to client was sent for /posts');

    res.json(posts)
})

app.listen(port, () => {
    console.log('server attivo su port ' + port);
});

