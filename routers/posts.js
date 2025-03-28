const express = require('express')
const router = express.Router();
const posts = require('../postsArray')

//ottieni i posts
router.get('/', (req, res) => {
    console.log('response to client was sent for /posts');

    res.json(posts)
});

//ottieni post desiderato
router.get('/:slug', (req, res) => {
    console.log('showing details for post ' + req.params.slug);

    const result = posts.find((param) => {
        return param.slug === req.params.slug;
    }) ?? ('nessun risultato trovato');

    res.json(result)
});

//crea nuovo post
router.post('/', (req, res) => {
    console.log('the user is creating a new post');

    res.send('creazione di un nuovo oggetto')
});

//modifica un post per intero
router.put('/:slug', (req, res) => {
    console.log('user is trying to modify element ' + req.params.slug);

    let currentSlug = req.params.slug;

    let currentPost = posts.find((post) => post.slug === currentSlug);

    currentPost ? res.send('stai provando a modificare ' + currentPost.slug) : res.send('inserisci uno slug valido')
});

// modifica parte di un post
router.patch('/:slug', (req, res) => {
    console.log('user is trying to partially modify element ' + req.params.slug);

    let currentSlug = req.params.slug;

    let currentPost = posts.find((post) => post.slug === currentSlug);

    currentPost ? res.send('stai provando a modificare parzialmente ' + currentPost.slug) : res.send('inserisci uno slug valido')
    });

// destroy
router.delete('/:slug', (req, res) => {
    console.log('user is trying to destroy element ' + req.params.slug);

    let currentSlug = req.params.slug;

    let currentPost = posts.find((post) => post.slug === currentSlug);

    currentPost ? res.send('stai provando ad eliminare ' + currentPost.slug) : res.send('inserisci uno slug valido')
    });



module.exports = router;