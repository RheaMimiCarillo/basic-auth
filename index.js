'use strict';
require('dotenv').config();

const { db, start } = require('./server.js');
const {db} = require('./src/')

db.sync()
.then(() => {
  start(PORT)
});
