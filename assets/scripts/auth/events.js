'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateAccount = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createAccount(data)
    .then(ui.createAccountSuccess)
    .catch(ui.createAccountFailure)
}

const onLogin = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.login(data)
    .then(ui.loginSuccess)
    .catch(ui.loginFailure)
}

const onLogout = function (event) {
  event.preventDefault()

  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const clickHandlers = () => {
  $('#create-account').on('submit', onCreateAccount)
  $('#login').on('submit', onLogin)
  $('#logout').on('click', onLogout)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  clickHandlers
}
