const express = require('express')
const router = express.Router();
const posts = require('../postsArray')

router.get('/', (req, res) => {
    console.log('response to client was sent for /');

    res.json(posts)
})

module.exports = router;