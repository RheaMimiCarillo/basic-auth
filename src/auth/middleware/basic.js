'use strict';

/* REQUIRE */
const bcrypt = require('bcrypt');

// User object made in `models` directory
const Users = require('../models');

// import base64
const base64 = require('base-64');



// 
async function basic(req, res, next)
{
  // take all this stuff
  // extract it with middleware
  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  /*
    Now that we finally have username and password, let's see if it's valid
    1. Find the user in the database by username
    2. Compare the plaintext password we now have against the encrypted password in the db
       - bcrypt does this by re-encrypting the plaintext password and comparing THAT
    3. Either we're valid or we throw an error
  */
  try
  {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid)
    {
      // save the `body` from the request for later use for other middleware
      // in other word, we don't want to overwrite the body


      // make a new thing to attach to request called  `user`
      req.user = user;
      res.status(200).json(user);

      next();
    }
    else
    {

      //throw new Error('Invalid User');

      next('invalid user');
    }
  }
  catch (error) 
  {
    //res.status(403).send('Invalid Login');

    // pass in error to next
    next(error);
  }
}


module.exports = basic;
