'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const store = require('../store');
const api = require('./api');
const ui = require('./ui');

const signUpEvent = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  console.log(formData);

  api.signUp(formData)
    .then((response) => {
      store.user = response.user;
      console.log(store.user);
      return store.user;
    })
    .then(ui.signUpSucess)
    .catch(ui.onError);
};

const onFormSubmit = function (event) {

  const formType = this.name;

  switch (formType) {
    case 'sign-up':
      signUpEvent(event);
      break;
    default:
      console.log('default action');
  }
};

module.exports = {
  onFormSubmit,
};
