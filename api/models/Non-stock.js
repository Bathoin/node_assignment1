/**
 * Non-stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Symbol:{
      type:'string'
      required: 'true'
    },

  Name:{
      type'string'
    required:'true'
        },

  Share_amount:{
      type:'integer'
      required:'true'
                },

  Purchase_price:{
      type:'string'
      required:'true'
                  },
  Date_of_purchase:{
      type:'date'
      required:'true'
                  },
  }
};

