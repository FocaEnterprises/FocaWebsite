const express = require('express');
const router = require('./router.js');
const path = require('path');

const server = express();

server
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', router.index)
;

server.listen(80);
console.log('FocaWebsite online!')
