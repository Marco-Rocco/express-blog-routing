const express = require('express');
const app = express();
const port = 1100;

app.get('/', (req, res) => {
    console.log('response to client was sent for /');

    res.send('server del blog-router')
})

app.listen(port, () => {
    console.log('server attivo su port ' + port);
});

