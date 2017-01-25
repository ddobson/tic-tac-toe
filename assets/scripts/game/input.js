'use strict';

const engine = require('./engine');
const ui = require('./game-ui');

const game = new engine.Game(engine.newBoard);

const validMove = function (cell) {
  if (cell.html() === '') {
    return true;
  }

  return false;
};

const makeMove = function (event) {
  event.preventDefault();

  const $cell = $('#' + this.id);
  const indx = $cell.attr('id').slice(1);

  if (validMove($cell)) {
    game.board[indx] = game.currentPlayer;
    $cell.html(game.currentPlayer);
    console.log(game.board);
  } else {
    ui.invalidMove();
    return;
  }

  if (game.checkWinner()) {
    console.log(game.currentPlayer + ' wins!');
  } else {
    game.switchPlayer();
  }

  return game;
};

module.exports = {
  game,
  makeMove,
};
