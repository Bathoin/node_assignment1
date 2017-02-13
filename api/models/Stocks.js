/**
 * Created by Bathoin on 2/10/2017.
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
      type:'float',
      required: true
    },
    price:{
      type:'string'

    },
    Date_of_purchase:{
      type:'string',
      defaultsTo: '1-1-2000'
    },
    owner: {
      model: 'Customer',
      required: true
    }
  }
};
