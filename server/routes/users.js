const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../model/user");
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/signUp', (req, res) => {
    console.log('hello');
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });


        user.save()
            .then(result => {
                return res.status(201).json({
                    message: 'user created',
                    result: result
                });
            })
            .catch(err => {
                return res.status(500).json({
                    error: err
                });
            });
    })

});

router.post('/login', (req, res) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }) //s'occupe d'abord a trouver dans la collection des users un qui a le meme mail qui a ete recu de la connexion 
        .then(user => {
            if (!user) { //si il trouve pas alor connexion échoué
                return res.status(401).json({
                    message: "Auth failed"
                })
            }
            fetchedUser = user //fetchedUser recupere le user qui ete trouver avec le meme mail
            return { result: bcrypt.compare(req.body.password, user.password), user: fetchedUser } //compare le password de fetchedUser avec le password de la connexion
        })

    .then(({ result, user }) => { //et ensuite une fois le mail verifier il passe au password
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            console.log(user);
            const token = jwt.sign( //va creer un token avec une expiration au bout de 1h et qui sera verifier dans le middleware
                { email: fetchedUser.email, userId: fetchedUser._id },
                'secret_this_should_be_longer', { expiresIn: "1h", }
            );
            res.status(200).json({
                userId: user._id,
                isAdmin: user.isAdmin,
                token: token
            });
        })
        .catch(err => {
            console.log(err)
            return res.status(401).json({
                message: "Auth failed"
            })
        })
})

router.get('/isAdmin/:id', (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then((user) => {
            return res.status(200).send(user.isAdmin); //retourne un boolean si c'est true alor c'est bien l'admin
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed"
            })
        })
})

module.exports = router;