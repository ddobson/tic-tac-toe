'use strict';

const config = require('../config');

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

// Change Password
// Create Game
// Update game

module.exports = {
  signIn,
  signUp,
};
