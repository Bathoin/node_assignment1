/**
 * Stocks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  Category:{
    type:'String',
    required:'true'
  },

    Description:{
    type: 'text',
      required:'false'
    },

    Acquired_value:{
    type: 'string',
      required:'true'
    },

    Acquired_date:{
    type:'date',
      required:'true'
    },

    Recent_value:{
    type:'string',
      required:'true'
    },

    Recent_date:{
    type:'date',
      required:'true'
    }

  }
};

