'use strict';

function fourHundredAndFour(error, req, res, next)
{
  console.log(error);
  res.status(404);
  res.send('404: not found');
}

module.exports = fourHundredAndFour;
