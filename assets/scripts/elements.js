'use strict';

const elements = {
  changePasswordLink: '<li><a href="#" data-toggle="modal" data-target="#change-password-modal">' +
                        'Change Password' +
                      '</a></li>',
  closeButton: '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                  '<span aria-hidden="true">' + '&times;' + '</span>' +
                '</button>',
  dropDownCaret: '<span class="caret"></span>',
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
  newGameButton: '<button id="new-game" class="btn btn-primary btn-lg" type="button" name="button">' +
                    'New Game' +
                  '</button>',
  playerEmail: '<h4>User: </h4>',
  signInLink: '<li><a href="#" data-toggle="modal" data-target="#sign-in-modal">Sign In</a></li>',
  signOutLink: '<li><a href="#" id="sign-out">Sign Out</a></li>',
  signUpLink: '<li><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>',

};

module.exports = elements;
