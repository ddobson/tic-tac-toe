'use strict';

const winningStates = [
                        [0, 1, 2], [3, 4, 5], [6, 7, 8],  //rows
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],  //columns
                        [0, 4, 8], [2, 4, 6],             //diagonals
                      ];

const Game = function (board) {
  this.board = board;
  this.playerTurn = 'x';

  this.getIndexes = function () {
    let indexes = [];
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] === this.playerTurn) {
        indexes.push(i);
      }
    }

    return indexes;
  };

  this.compareArrays = function (playerSet, winSet) {
    return winSet.every((e) => {
      const isIncluded = (playerSet.indexOf(e) >= 0);
      return isIncluded;
    });
  };

  this.checkWinner = function () {
    const indexes = this.getIndexes();
    let winner = null;

    for (let i = 0; i < winningStates.length; i++) {
      const isWinner = this.compareArrays(indexes, winningStates[i]);

      if (isWinner) {
        winner = this.playerTurn;
        break;
      }
    }

    return winner;
  };

  this.switchTurn = function () {
    if (this.playerTurn === 'x') {
      this.playerTurn = 'o';
    } else {
      this.playerTurn = 'x';
    }

    return this.playerTurn;
  };

};

module.exports = {
  Game,
};

// const tic = require('./assets/scripts/game/game.js');
// const game = new tic.Game(['x','x',null,'o','o',null,null,null,null]);
//
