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

module.exports = {
  invalidMove,
};
