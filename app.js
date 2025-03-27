const express = require('express');
const app = express();
const port = 1100;

//rendi publiche le immagini
app.use(express.static('public'))
//importa router
const blogRouter = require('./routers/posts');

app.get('/', (req, res) => {
    console.log('response to client was sent for /app');

    res.send('server del blog')
})

app.use("/posts", blogRouter)

app.listen(port, () => {
    console.log('server attivo su port ' + port);
});

