'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events');
const gameEvents = require('./game/game-events');

$(() => {
  setAPIOrigin(location, config);
  $('#reset-game').on('click', gameEvents.newGame);
  $('.auth-form').on('submit', authEvents.onFormSubmit);
  $('#sign-out').on('click', authEvents.handleSignOut);
  $('.gameboard').on('click', '.cell', gameEvents.makeMove);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
