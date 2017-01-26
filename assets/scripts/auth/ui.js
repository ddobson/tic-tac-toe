'use strict';

const signUpSucess = function () {
  console.log('sign up successful');
};

const onError = function () {
  console.log('there was an error');
};

module.exports = {
  onError,
  signUpSucess,
};
