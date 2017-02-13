/**
 * Created by Bathoin on 2/10/2017.
 */
module.exports = {

  attributes: {
    Category:{
      type:'String'

    },

    Description:{
      type: 'text'
    },

    Avalue:{
      type: 'string'

    },

    Adate:{
      type:'string'

    },

    Recent_value:{
      type:'string'

    },

    Recent_date:{
      type:'string'
    },

    owner: {
      model: 'Customer',
      required: true
    }

  }
};
