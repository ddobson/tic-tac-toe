'use strict';

const newBoard = [null, null, null, null, null, null, null, null, null];

const Game = function (board) {
  this.board = board;
  this.currentPlayer = 'x';
  this.winningStates = [
                          [0, 1, 2], [3, 4, 5], [6, 7, 8],  //rows
                          [0, 3, 6], [1, 4, 7], [2, 5, 8],  //columns
                          [0, 4, 8], [2, 4, 6],             //diagonals
                        ];
};

Game.prototype.boardFull = function () {
  return !this.board.includes(null);
};

Game.prototype.getIndexes = function () {
  let indexes = [];
  for (let i = 0; i < this.board.length; i++) {
    if (this.board[i] === this.currentPlayer) {
      indexes.push(i);
    }
  }

  return indexes;
};

Game.prototype.compareArrays = function (playerSet, winSet) {
  return winSet.every((e) => {
    const isIncluded = (playerSet.indexOf(e) >= 0);
    return isIncluded;
  });
};

Game.prototype.checkWinner = function () {
  const indexes = this.getIndexes();
  let winner = null;

  if (this.boardFull()) {
    winner = 'tie';
  }

  for (let i = 0; i < this.winningStates.length; i++) {
    const isWinner = this.compareArrays(indexes, this.winningStates[i]);

    if (isWinner) {
      winner = this.currentPlayer;
      break;
    }
  }

  return winner;
};

Game.prototype.switchPlayer = function () {
  if (this.currentPlayer === 'x') {
    this.currentPlayer = 'o';
  } else {
    this.currentPlayer = 'x';
  }

  return this.currentPlayer;
};

Game.prototype.reset = function () {
  this.currentPlayer = 'x';
  this.board = newBoard;
  return this.board;
};


module.exports = {
  Game,
  newBoard,
};

// const tic = require('./assets/scripts/game/game.js');
// const game = new tic.Game(['x','x',null,'o','o',null,null,null,null]);
