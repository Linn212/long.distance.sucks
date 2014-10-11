/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    userId: 'GUID',
    accountName: 'STRING',
    password: 'STRING',

    posts:{
        collection: 'post',
        via: 'author',
    },

    love: {
        model:'relationship',
    },
  },

};
