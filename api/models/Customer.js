/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
    type: 'string',
      required: true
    },

    Address:{
      type: 'string',
      required: true
    },

    City:{
      type: 'string',
      required: true
    },

    State:{
      type: 'string',
      required: true
    },

    Zipcode:{
      type: 'string'
    },

    email:{
      type: 'string',
      email: true
    },

    Phone:{
      type: 'string',
      defaultsTo: '111-222-3333'
    },

    Cellphone:{
      type: 'string',
      defaultsTo: '111-222-3333'
    }

  }
};

