'use strict';

const engine = require('./engine');
const api = require('../api');
const ui = require('./game-ui');
const store = require('../store');

const game = new engine.Game();

const validMove = function (cell) {
  if (cell.html() === '') {
    return true;
  }

  return false;
};

const boardReady = function () {
  if (!store.user){
    ui.promptSignIn();
    return false;
  } else
  if (game.gameOver) {
    return false;
  } else if (game.newGame()) {
    api.createGame()
      .then((response) => {
        store.games.push(response.game);
        console.log(store.games);
      });
  }

    return true;
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

  const $cell = $('#' + this.id);
  const indx = parseInt($cell.attr('id').slice(1));
  const ready = boardReady();
  const valid = validMove($cell);

  // const updateGameServer = api.updateGame;
  // game.setMove(indx, updateGameServer)  <--use as a callback

  if (ready && valid) {
    game.setMove(indx);
    ui.drawMove($cell, game.currentPlayer);
  } else if (!valid) {
    ui.invalidMove();
    return;
  } else {
    return;
  }

  game.checkWinner(handleWinner);

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
