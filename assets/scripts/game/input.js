'use strict';

const engine = require('./engine');
const ui = require('./game-ui');

const game = new engine.Game(engine.newBoard);

const validMove = function () {

};

const makeMove = function () {
  // check input valid
  // update game.board
  // repaint DOM board
  // check for winner
  // return if winner
  // else switch game.playerTurn
};

module.exports = {
  game,
  makeMove,
};
