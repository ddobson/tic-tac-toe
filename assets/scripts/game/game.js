'use strict';

// [
// 0,1,2,
// 3,4,5,
// 6,7,8
// ]

const winningStates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const Game = function (board) {
  this.board = board;
  this.turn = 'x';

  this.winner = function () {
    return board;
  };

  this.getIndexes = function () {
    let indexes = [];
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === this.turn) {
        indexes.push(i);
      }
    }
    return indexes;
  };
};

module.exports = {
  Game,
};
