'use strict';

const $messageBar = $('#message-bar');

const invalidMove = function () {
  const $message = $('<div class="message"></div>');
  $message
    .addClass('alert alert-warning alert-dismissible fade in')
    .append('<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
              '<span aria-hidden="true">' + '&times;' + '</span>' +
            '</button>'
            )
    .append('<strong>Please choose an unclaimed square</strong>');

  $messageBar.append($message);
};

const gameWon = function (player) {
  const $message = $('<div class="message"></div>');
  $message
    .addClass('alert alert-success alert-dismissible fade in')
    .append('<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
              '<span aria-hidden="true">' + '&times;' + '</span>' +
            '</button>'
            )
    .append('<strong>' + player.toUpperCase() + ' won the game</strong>');

  $messageBar.append($message);
};

const gameTied = function () {
  const $message = $('<div class="message"></div>');
  $message
    .addClass('alert alert-info alert-dismissible fade in')
    .append('<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
              '<span aria-hidden="true">' + '&times;' + '</span>' +
            '</button>'
            )
    .append('<strong>It\'s a tie!</strong>');

  $messageBar.append($message);
};

const resetMessages = function () {
  $messageBar.html('');
};

module.exports = {
  invalidMove,
  gameWon,
  gameTied,
  resetMessages,
};
