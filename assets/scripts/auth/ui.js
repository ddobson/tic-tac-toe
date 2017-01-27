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
  $('.dropdown-id').html('Sign In');

  $('.user-actions')
    .html('<li><a href="#" data-toggle="modal" data-target="#sign-in-modal">Sign In</a></li>')
    .append('<li><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>');
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
