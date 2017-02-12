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

const authMessageConstructor = function (message, $errorBar) {

  if ($errorBar.html() === '') {
    const $message = $(elements.messageContainer);

    $message
      .addClass('alert alert-dismissible fade in alert-danger')
      .append(message);

    $errorBar.append($message);
  }
};

const resetMessages = function () {
  $messageBar.html('');
};

const newGameBoard = function () {
  $('.gameboard').html('');
};

const resetGameBoard = function () {
  newGameBoard();

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
  $('#sign-up-error-bar').html('');
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

  $('#sign-in-error-bar').html('');
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

  newGameBoard();
  resetMessages();
  removeNewGameBtn();
  messageConstructor(elements.messages.signOut, 'alert-success');
  promptSignIn();
};

const passwordResetSucess = function () {
  $('#change-password-modal').modal('toggle');
  $('#change-password-error-bar').html('');
  resetMessages();
  messageConstructor(elements.messages.passwordReset, 'alert-success');
  $('#change-password')[0].reset();
};

const onAuthError = function (type) {
  const message = elements.messages.authError;

  switch(type) {
    case 'sign-in':
      authMessageConstructor(
        message,
        $('#sign-in-error-bar'));
        break;
    case 'sign-up':
      authMessageConstructor(
        message,
        $('#sign-up-error-bar'));
        break;
    case 'change-password':
      authMessageConstructor(
        message,
        $('#change-password-error-bar'));
        break;
  }

};

const onError = function () {
  messageConstructor(elements.messages.error, 'alert-danger');
};

module.exports = {
  drawMove,
  gameWon,
  gameTied,
  invalidMove,
  onAuthError,
  onError,
  passwordResetSucess,
  promptSignIn,
  newGameUi,
  signInSucess,
  signOutSucess,
  signUpSucess,
};
