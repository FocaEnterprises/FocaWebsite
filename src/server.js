const express = require('express');
const router = require('./router.js');
const path = require('path');
const config = require('../config.json');
const bot = require('./bot/bot')

const server = express();
const client = new bot();

server
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', router.index)
;

server.listen(80);
client.start(config.token);
console.log('FocaWebsite online!')