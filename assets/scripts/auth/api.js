'use strict';

const config = require('../config');
const store = require('../store');

const signUp = function (formData) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: formData,
  });
};

const signIn = function (formData) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: formData,
  });
};

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const changePassword = function (formData) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: formData,
  });
};

// Create Game
// Update game

module.exports = {
  changePassword,
  signIn,
  signOut,
  signUp,
};
