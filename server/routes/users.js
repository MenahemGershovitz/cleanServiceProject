var express = require('express');
const bcrypt = require("bcrypt");
var router = express.Router();
const User = require("../model/user");

/* GET users listing. */
router.post('/signUp', (req, res) => {
  console.log('hello');
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
    user.save().then(result => {
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

module.exports = router;
