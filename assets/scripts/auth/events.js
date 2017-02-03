'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const store = require('../store');
const api = require('../api');
const ui = require('../ui');

const handleSignUp = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signUp(formData)
    .then(ui.signUpSucess)
    .catch(() => {
      ui.onAuthError('sign-up');
    });
};

const handleSignIn = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signIn(formData)
    .then((response) => {
      store.user = response.user;
      return store.user;
    })
    .then(api.gamesIndex)
    .done((response) => {
      store.games = response.games;
      ui.signInSucess(store.games, store.user.email);
      return store.games;
    })
    .catch(() => {
      ui.onAuthError('sign-in');
    });
};

const handleSignOut = function () {
  event.preventDefault();

  api.signOut()
    .then(ui.signOutSucess)
    .catch(ui.onError);
};

const passwordReset = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.changePassword(formData)
    .then(ui.passwordResetSucess)
    .catch(() => {
      ui.onAuthError('change-password');
    });
};

const onFormSubmit = function (event) {

  const formType = this.id;

  switch (formType) {
    case 'sign-up':
      handleSignUp(event);
      break;
    case 'sign-in':
      handleSignIn(event);
      break;
    case 'change-password':
      passwordReset(event);
      break;
    default:
      console.error('No matching form type');
  }

};

module.exports = {
  handleSignOut,
  onFormSubmit,
};
