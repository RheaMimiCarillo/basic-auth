'use strict';

const express = require('express');
const basic = require('../middleware/basic.js')
const { Users } = require('../models/Users.js');
const router = express.Router();

router.post('/signup', async (req, res) =>
{
  try
  {
    // hash the user's password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // user Users model to create a user
    const record = await Users.create(req.body);
    res.status(201).json(record);
  }
  catch (e) 
  {
    res.status(403).send('Error Creating User');
  }
})

router.post('/signin', basic, (req, res) =>
{
  // send req.user
  res.status(200).send(req.user);
});

module.exports = 
