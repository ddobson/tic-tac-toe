'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events');
const input = require('./game/input');

$(() => {
  setAPIOrigin(location, config);
  $('.cell').on('click', input.makeMove);
  $('#reset-game').on('click', input.resetGame);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
