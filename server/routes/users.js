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
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        })
      }
      fetchedUser = user
      return {result:bcrypt.compare(req.body.password, user.password),user:fetchedUser}
    })

    .then(({result,user}) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        'secret_this_should_be_longer',
        { expiresIn: "1h", }
      );
      res.status(200).json({
        userId:user._id,
        isAdmin:user.isAdmin,
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
    .then((user)=> {
      return res.status(200).send(user.isAdmin);
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      })
    })
})

module.exports = router;
