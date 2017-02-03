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
      type: 'string'
    },

    City:{
      type: 'string'
    },

    State:{
      type: 'string'
    },

    Zipcode:{
      type: 'string'
    },

    email:{
      type: 'string',
      email: true
    },

    Phone:{
      type: 'integer',
      Phone: true
    },

    Cell:{
      type: 'integer',
      Cell: true
    }

  }
};

