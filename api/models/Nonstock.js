/**
 * Created by Bathoin on 2/5/2017.
 */
module.exports = {

  attributes: {
    Symbol:{
      type:'string'

    },

    Name:{
      type:'string',
      required: 'true'
    },

    Share_amount:{
      type:'number'

    },

    Purchase_price: {
      type: 'string',
      defaultsTo: '.01'
    },
    Date_of_purchase:{
      type:'string',
      defaultsTo: '1-1-2000'
    }
  }
};
