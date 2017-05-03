'use strict'

// const store = require('../store.js')

const createProfileSuccess = (data) => {
  console.log('create profile success. Data is ', data)
}

const createProfileFailure = (error) => {
  console.error(error)
  $('#cr-pr-err-modal').modal('show')
}

const updateProfileSuccess = (data) => {
  console.log('update profile success')
}

const updateProfileFailure = (error) => {
  console.error(error)
}

module.exports = {
  createProfileSuccess,
  createProfileFailure,
  updateProfileSuccess,
  updateProfileFailure
}
