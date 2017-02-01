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
      required: 'true'
    },

    Address:{
      type: 'string',
      required: 'true'
    },

    City:{
      type:'text'
      required:'true'
    },

    State:{
      type:'text'
      required:'true'
    },

    Zipcode:{
      type:'string'
      required:'true'
    },

    email:{
      type: 'string',
      required: 'false'
    },

    Phone:{
      type: 'string'
      required: 'true'
    },

    Cell:{
      type:'string'
      required:'false'
    }

  }
};

