'use strict';

const signUpSucess = function () {
  console.log('sign up successful');
};

const signInSucess = function () {
  $('.dropdown-id').html('Sign Out');

  $('.user-actions')
    .html('<li><a href="#" id="sign-out">Sign Out</a></li>')
    .append('<li><a href="#" data-toggle="modal" data-target="#change-password-modal">Change Password</a></li>');
};

const signOutSucess = function () {
  console.log('signed out');
};

const passwordResetSucess = function () {
  console.log('password reset successful');
};

const onError = function () {
  console.log('there was an error');
};

module.exports = {
  onError,
  passwordResetSucess,
  signInSucess,
  signOutSucess,
  signUpSucess,
};
