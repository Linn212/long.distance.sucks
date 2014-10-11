/**
 * Relationship
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    relationshipId: 'GUID',
    startTime: 'DATETIME',
    endTime: 'DATETIME',

    people:{
        collection: 'User',
        via: 'love',
    },
  },

};
