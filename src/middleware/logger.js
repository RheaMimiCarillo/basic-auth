'use strict';

// this function logs each hit to our server, then goes to the `next` function
function logger(req, res, next)
{
  // log something
  console.log('REQUEST METHOD: ' + req.method, 'REQUEST PATH: ' + req.path);

  // then go to the next function or middleware
  next();
}

// export the `logger` function from `logger.js`
module.exports = logger;
