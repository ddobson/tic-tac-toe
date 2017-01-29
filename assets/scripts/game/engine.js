'use strict';

const Game = function () {
  this.newBoard = [null, null, null, null, null, null, null, null, null];
  this.board = this.newBoard.slice();
  this.currentPlayer = 'x';
  this.gameOver = false;
  this.winningStates = [
                          [0, 1, 2], [3, 4, 5], [6, 7, 8],  //rows
                          [0, 3, 6], [1, 4, 7], [2, 5, 8],  //columns
                          [0, 4, 8], [2, 4, 6],             //diagonals
                        ];
};

Game.prototype.boardFull = function () {
  return !this.board.includes(null);
};

Game.prototype.setMove = function (indx) {
  this.board[indx] = this.currentPlayer;
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

Game.prototype.checkWinner = function (indx, callback) {
  const indexes = this.getIndexes();
  let winner = null;

  if (this.boardFull()) {
    winner = 'tie';
  }

  for (let i = 0; i < this.winningStates.length; i++) {
    const isWinner = this.compareArrays(indexes, this.winningStates[i]);

    if (isWinner) {
      winner = this.currentPlayer;
      this.gameOver = true;
      break;
    }
  }

  callback(winner, indx);
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
  this.gameOver = false;
  this.board = this.newBoard.slice();
  return this.board;
};

module.exports = {
  Game,
};
