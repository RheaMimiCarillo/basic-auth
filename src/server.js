'use strict'
// server.js exports the express.js app singleton
// and i

const app = express();
const basic = require('./auth/middleware/basic.js');
// support json data to be attached to the HTML request (in the header?)
// instead of looking at the URL string itself, it's attached to the 'body' of the URL or something


// import JSON support
app.use(express.json());
// allows URL encoded values to appear in the `request body` of the URL
// we have multiple things that speak "JSON" and we want to encode things in JSON-ese
app.use(express.urlencoded({ extended: true }));

module.exports = {
  // export the express.js app singleton
  app,
  // start listening to ths server's port
  start: (port) =>
  {
    app.listen(port, () =>
    {
      console.log('App is listening on port: ' + port);
    });
  }
}
