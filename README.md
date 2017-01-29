# JavaScript Tic-Tac-Toe

This is a game of tic-tac-toe written in Javascript and playable in the browser. Gameplay requires an account with the game's [API server](https://github.com/ga-wdi-boston/game-project-api) where the game state will be saved.

Demo: https://ddobson.github.io/tic-tac-toe/

## Technolgies Used
- **Javascript** for engine and event handling
- **jQuery** for DOM manipulation, event listening and ajax
- **Bootstrap** for HTML and CSS

## Building the Game

To begin building the game I first started with a wireframe and a review of all of the project's [requirments](https://github.com/ga-wdi-boston/game-project/blob/master/requirements.md). This gave me a good foundation to start my build. In general, my project was built in the following order.

  - Game logic
  - Connecting the game to the DOM
  - User authentication
  - API game actions
  - UI handling

Some things I learned during this project:

  - Start with the core logic and then consider the page
  - Seperation of concerns will make your life much easier
  - Dealing with the UI when things change requires a lot of consideration of the user and code order

During development of the game, seperation of concerns was considered from the start. The following sections will detail some of the build process that went into each major concern.

#### Game Engine

The game engine is a pure JavaScript file that contains a `Game` object constructor and a list of prototype methods for the game.

```js
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
```

All of the logic needed to play is contained in the engine. Using the engine you can create a new game, set a move, switch players, check for a winner and reset the game.

Determing a win is accomplished by comparing the current player's moves to a winning combination using array iteration.

```js
Game.prototype.compareArrays = function (playerSet, winSet) {
  return winSet.every((e) => {
    const isIncluded = (playerSet.indexOf(e) >= 0);
    return isIncluded;
  });
};
```

In the main function to check for a winner, this comparison is run against all eight possible winning combinations and `x`, `o`, `tie` or `null` will be returned. The callback function will handle updating the game server and alerting the player of a win if one exists.

```js
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
```

#### Events
Event listeners are present for both game and authentication actions. On an event an event handler is triggered which takes care of any AJAX calls, communication with the game engine and updating the UI.

The most complex event handler occurs when a move is made. The `makeMove` function must select the element clicked and parse it for an index value that can be used in the game engine. Once this is done it then must then check that the board is ready for input and that the input is valid.

```js
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
```

Assuming the input is valid and the board is ready, the move will be made and the engine is then called to check for a winner. The `checkWinner` function will execute a callback, `handleWinner`, that handles any result and updates the game server.

#### API

Using the game project's API server, a user's game is stored and updated on each move. The most challenging part of this requirement was figuring out where in the existing logic to make the AJAX calls to the server when creating, updating or getting games on the server.

#### User Interface
For presentation I used Bootstrap in the markup. This made styling and project much easier and allowed me to focus on other things.

All UI updates are called from event handlers and manipulate the DOM using jQuery. When writing the UI functions I found that I was often repeating myself. To solve for this I created a `messageConstructor` function which could easily handle delivering alerts for any type of auth or game message.

```js
const messageConstructor = function (message, htmlClass) {
  const $message = $(elements.messageContainer);

  $message
    .addClass('alert alert-dismissible fade in ' + htmlClass)
    .append(elements.closeButton)
    .append(message);

  $messageBar.append($message);
};
```

I also found that I was using many long strings in my UI functions to render HTML markup. To solve for this I created a file which contains a JS object with strings representing HTML markup. To keep the code clean, I referenced this object rather than writing the markup directly into the functions.

```js
const elements = {
  changePasswordLink: '<li><a href="#" data-toggle="modal" data-target="#change-password-modal">' +
                        'Change Password' +
                      '</a></li>',
  closeButton: '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                  '<span aria-hidden="true">' + '&times;' + '</span>' +
                '</button>',
  gamesPlayed: '<h4 id="games-played">Games Played</h4>',
  messages: {
    chooseUnclaimed: '<strong>Please choose an unclaimed square</strong>',
    error: 'Uh oh! Looks like there was an error',
    passwordReset: '<strong>Password reset successful!</strong>',
    promptSignIn: '<strong>Please sign in to play</strong>',
    signIn: '<strong>Login Successful</strong>',
    signOut: '<strong>Logout Successful</strong>',
    signUp: '<strong>Sign up successful</strong>',
    tie: '<strong>It\'s a tie!</strong>',
    winnerStart: '<strong>',
    winnerEnd: ' won the game</strong>',
  },
  messageContainer: '<div class="message"></div>',
  playerEmail: '<h4>User: </h4>',
  signInLink: '<li><a href="#" data-toggle="modal" data-target="#sign-in-modal">Sign In</a></li>',
  signOutLink: '<li><a href="#" id="sign-out">Sign Out</a></li>',
  signUpLink: '<li><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>',

};
```

## What to do Next?
- Store AJAX responses in cookies to prevent login on page refresh.
- Add functionality to allow a second player to sign in and play games from a second computer using the API.
- Validate user email input.
- Add more style (it's boring, I know).

## Mockups & User Stories
Mockups: https://github.com/ddobson/tic-tac-toe/tic-tac-toe.pdf
User Stories: https://github.com/ddobson/tic-tac-toe/user-stories.md
