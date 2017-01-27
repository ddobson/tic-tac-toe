'use strict';

const engine = require('./engine');
const api = require('../api');
const ui = require('../ui');
const store = require('../store');

const game = new engine.Game();

const validMove = function (cell) {
  if (cell.html() === '') {
    return true;
  }

  return false;
};

const boardReady = function () {
  if (!store.user) {
    ui.promptSignIn();
    return false;
  } else if (game.gameOver) {
    return false;
  }

  return true;
};

const updateGameServer = function (indx, currentGame) {
  api.updateGame(indx, currentGame)
    .then((response) => {
      console.log(response.game);
    });
};

const handleWinner = function (gameWinner, indx) {

  updateGameServer(indx, game);

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

  if (ready && valid) {
    game.setMove(indx);
    ui.drawMove($cell, game.currentPlayer);
  } else if (!valid) {
    ui.invalidMove();
    console.log($cell.html());
    return;
  } else {
    return;
  }

  game.checkWinner(indx, handleWinner);

  return game;
};

const newGame = function (event) {
  event.preventDefault();
  game.reset();
  ui.newGameUi();
  api.createGame()
    .then((response) => {
      store.game = response.game;
      console.log('create game:', store.game);
    });
};

const getGames = function () {
  api.gamesIndex()
    .then((response) => {
      ui.displayGames(response.games);
    });
};

module.exports = {
  getGames,
  makeMove,
  newGame,
};
