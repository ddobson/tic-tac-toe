'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const store = require('../store');
const api = require('./api');
const ui = require('./ui');

const handleSignUp = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signUp(formData)
    .then(ui.signUpSucess)
    .catch(ui.onError);
};

const handleSignIn = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signIn(formData)
    .then((response) => {
      store.user = response.user;
      console.log(store);
      return store.user;
    })
    .then(ui.signInSucess)
    .catch(ui.onError);
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
    .catch(ui.onError);
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
      console.log('default action');
  }
};

module.exports = {
  handleSignOut,
  onFormSubmit,
};
