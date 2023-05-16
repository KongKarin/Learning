const router = require("express").Router();
const { publicPost, privatePosts } = require("../db");

router.get('/public', (req, res) => {
    res.json(publicPost)
})

router.get('/private', (req, res, next) => {
    let userValid = true;

    if(userValid) {
        next()
    } else {
        return res.status(400).json({
            errors: [
                {
                    msg: "Access D"
                }
            ]
        })
    }

}, (req, res) => {
    res.json(privatePosts)
})



module.exports = router;