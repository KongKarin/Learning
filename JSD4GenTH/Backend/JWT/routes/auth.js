const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { users } = require("../db")
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken");

router.post('/signup', [
    check("email", "Please provide a valid email")
        .isEmail(),
    check("password", "Please provide a password that is at least 5 characters long")
        .isLength({
            min: 6
        })
], async (req, res) => {
    const { password, email} = req.body;

    // VALIDATED THE INPUT
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        })
    };

    // VALIDATED IF USER DOESN'T ALREADY EXIST
    let user = users.find((user) => {
        return user.email === email
    });

    if(user){
        return res.status(422).json({
            errors: [
                {
                    msg: "This user already exists"
                }
            ]
        })
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        email,
        password: hashedPassword
    });

    // relate .env
    // const token = await JWT.sign({
    //     email
    // }, "lkij213h234gui2h34kjhkj5436uasd9", {
    //     expiresIn: 36000
    // });

    // res.json({
    //     token
    // });
    res.status(422).json(
        {
           message: "Signup successful" 
        }
    );
});

router.post('/login', async (req, res) => {
    const { email, password} = req.body;
    
    let user = users.find((user) => {
        return user.email === email
    });
    
    if(!user){
        return res.status(422).json({
            errors: [
                {
                    msg: "Invalid Credentials",
                }
            ]
        })
    };

    let isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(404).json({
            errors: [
                {
                    msg: "Invalid Credentials",
                }
            ]
        })
    };

    const token = await JWT.sign({email}, "lkij213h234gui2h34kjhkj5436uasd9", {expiresIn: 36000})

    res.json({
        token
    });

})

router.get('/all', (req, res) => {
    res.json(users)
})

module.exports = router;