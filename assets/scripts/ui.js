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

const removeNewGameBtn = function () {
  $('#new-game').remove();
};

const newGameUi = function () {
  resetMessages();
  resetGameBoard();

  let totalGames = parseInt($('#total-games').html());

  $('#total-games').html((totalGames += 1));
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
  $('#sign-up-modal').modal('toggle');
  resetMessages();
  messageConstructor(elements.messages.signUp, 'alert-success');
  messageConstructor(elements.messages.promptSignIn, 'alert-success');
  $('#sign-up')[0].reset();
};

const signInSucess = function (playerGames, playerEmail) {
  const $playerInfo = $('.player-info');

  $('#sign-in-modal').modal('toggle');

  $('.dropdown-id').html(playerEmail + ' ' + elements.dropDownCaret);

  $('.user-actions')
    .html(elements.signOutLink)
    .append(elements.changePasswordLink);

  resetMessages();
  messageConstructor(elements.messages.signIn, 'alert-success');

  $('.scoreboard').append(elements.newGameButton);

  $playerInfo
    .append(elements.gamesPlayed + '<span id="total-games">' + playerGames.length + '</span>');

  $('#sign-in')[0].reset();
};

const signOutSucess = function () {
  $('.dropdown-id').html('Sign Up / Sign In ' + elements.dropDownCaret);

  $('.user-actions')
    .html(elements.signInLink)
    .append(elements.signUpLink);

  $('.player-info').html('');

  resetGameBoard();
  resetMessages();
  removeNewGameBtn();
  messageConstructor(elements.messages.signOut, 'alert-success');
  promptSignIn();
};

const passwordResetSucess = function () {
  $('#change-password-modal').modal('toggle');
  messageConstructor(elements.messages.passwordReset, 'alert-success');
  $('#change-password')[0].reset();
};

const onError = function () {
  messageConstructor(elements.messages.error, 'alert-danger');
};

module.exports = {
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
