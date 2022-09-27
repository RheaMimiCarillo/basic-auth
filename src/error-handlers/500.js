'use strict';

function fiveHundred(error, req, res, next)
{
  console.log(error);
  res.status(500);
  res.send('500: Internal server error, my person');
}

module.exports = fiveHundred;
