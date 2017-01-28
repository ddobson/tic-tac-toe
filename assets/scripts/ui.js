'use strict';

const elements = require('./elements');

const $messageBar = $('#message-bar');

const messageConstructor = function (message, htmlClass) {
  const $message = $(elements.messageContainer);

  $message
    .addClass('alert alert-dismissible fade in ' + htmlClass)
    .append(elements.closeButton)
    .append(message);

  $messageBar.append($message);
};

const resetMessages = function () {
  $messageBar.html('');
};

const resetGameBoard = function () {
  $('.gameboard').html('');

  for (let i = 0; i < 9; i++) {
    $('.gameboard')
      .append('<div id="c' + i + '" class="col-xs-4 cell"></div>');
  }
};

const newGameUi = function () {
  resetMessages();
  resetGameBoard();
};

const displayGames = function (games) {
  console.log(games);
};

const drawMove = function (cell, token) {
  cell.html(token);
};

const promptSignIn = function () {
  messageConstructor(elements.messages.promptSignIn, 'alert-danger');
};

const invalidMove = function () {
  messageConstructor(elements.messages.chooseUnclaimed, 'alert-warning');
};

const gameWon = function (player) {
  const $message = $(elements.messageContainer);
  $message
    .addClass('alert alert-success alert-dismissible fade in')
    .append(elements.closeButton)
    .append(elements.messages.winnerStart +
      player.toUpperCase() +
      elements.messages.winnerEnd);

  $messageBar.append($message);
};

const gameTied = function () {
  messageConstructor(elements.messages.tie, 'alert-info');
};

const signUpSucess = function () {
  messageConstructor(elements.messages.signUp, 'alert-success');
};

const signInSucess = function () {
  $('.dropdown-id').html('Sign Out');

  $('.user-actions')
    .html(elements.signOutLink)
    .append(elements.changePasswordLink);

  resetMessages();
  messageConstructor(elements.messages.signIn, 'alert-success');
};

const signOutSucess = function () {
  $('.dropdown-id').html('Sign In');

  $('.user-actions')
    .html(elements.signInLink)
    .append(elements.signUpLink);

  resetMessages();
  messageConstructor(elements.messages.signOut, 'alert-success');
};

const passwordResetSucess = function () {
  messageConstructor(elements.messages.passwordReset, 'alert-success');
};

const onError = function () {
  messageConstructor(elements.messages.error, 'alert-danger');
};

module.exports = {
  displayGames,
  drawMove,
  gameWon,
  gameTied,
  invalidMove,
  onError,
  passwordResetSucess,
  promptSignIn,
  newGameUi,
  signInSucess,
  signOutSucess,
  signUpSucess,
};
