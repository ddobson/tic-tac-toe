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

module.exports = {
  displayGames,
  drawMove,
  gameWon,
  gameTied,
  invalidMove,
  promptSignIn,
  newGameUi,
};
