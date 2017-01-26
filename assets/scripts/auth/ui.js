'use strict';

const signUpSucess = function () {
  console.log('sign up successful');
};

const signInSucess = function () {
  console.log('signed in');
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
