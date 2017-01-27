'use strict';

const $messageBar = $('#message-bar');

const promptSignIn = function () {
  console.log('you must sign in');
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

const closeButton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">' + '&times;' + '</span>' +
                    '</button>';

const invalidMove = function () {
  const $message = $('<div class="message"></div>');
  $message
    .addClass('alert alert-warning alert-dismissible fade in')
    .append(closeButton)
    .append('<strong>Please choose an unclaimed square</strong>');

  $messageBar.append($message);
};

const gameWon = function (player) {
  const $message = $('<div class="message"></div>');
  $message
    .addClass('alert alert-success alert-dismissible fade in')
    .append(closeButton)
    .append('<strong>' + player.toUpperCase() + ' won the game</strong>');

  $messageBar.append($message);
};

const gameTied = function () {
  const $message = $('<div class="message"></div>');
  $message
    .addClass('alert alert-info alert-dismissible fade in')
    .append(closeButton)
    .append('<strong>It\'s a tie!</strong>');

  $messageBar.append($message);
};

const signUpSucess = function () {
  console.log('sign up successful');
};

const signInSucess = function () {
  $('.dropdown-id').html('Sign Out');

  $('.user-actions')
    .html('<li><a href="#" id="sign-out">Sign Out</a></li>')
    .append('<li><a href="#" data-toggle="modal" data-target="#change-password-modal">Change Password</a></li>');
};

const signOutSucess = function () {
  $('.dropdown-id').html('Sign In');

  $('.user-actions')
    .html('<li><a href="#" data-toggle="modal" data-target="#sign-in-modal">Sign In</a></li>')
    .append('<li><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>');
};

const passwordResetSucess = function () {
  console.log('password reset successful');
};

const onError = function () {
  console.log('there was an error');
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
