const express = require('express')
const router = express.Router();
const posts = require('../postsArray')

//ottieni i posts
router.get('/', (req, res) => {
    console.log('response to client was sent for /posts');

    res.json(posts)
});

router.get('/:slug', (req, res) => {
    console.log('showing details for post ' + req.params.slug);

    const result = posts.find((param) => {
        return param.slug === req.params.slug;
    }) ?? ('nessun risultato trovato');

    res.json(result)
})



module.exports = router;