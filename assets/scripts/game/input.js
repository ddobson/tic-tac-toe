'use strict';

const engine = require('./engine');
const ui = require('./game-ui');

const game = new engine.Game();

const validMove = function (cell) {
  if (cell.html() === '') {
    return true;
  }

  return false;
};

const handleWinner = function (gameWinner) {
  if (gameWinner) {
    switch (gameWinner) {
      case 'x':
        ui.gameWon(gameWinner);
        break;
      case 'o':
        ui.gameWon(gameWinner);
        break;
      case 'tie':
        ui.gameTied();
        break;
      default:
    }
  } else {
    game.switchPlayer();
  }
};

const makeMove = function (event) {
  event.preventDefault();

  if (game.gameOver) {
    return;
  }

  const $cell = $('#' + this.id);
  const indx = parseInt($cell.attr('id').slice(1));

  if (validMove($cell)) {
    game.board[indx] = game.currentPlayer;
    ui.drawMove($cell, game.currentPlayer);
  } else {
    ui.invalidMove();
    return;
  }

  handleWinner(game.checkWinner());

  return game;
};

const resetGame = function (event) {
  event.preventDefault();
  game.reset();
  ui.resetGameUi();
};

module.exports = {
  makeMove,
  resetGame,
};
