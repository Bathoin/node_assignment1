/**
 * Created by Bathoin on 2/2/2017.
 */
module.exports = {

  'new': function(req, res) {
    res.view();

  },

  create: function(req, res, next) {
    Customer.create( req.params.all(), function customerCreated(err, customer) {
      if (err) return next(err);

      res.redirect('/customer/show/' + customer.id);
    });
  },

  show: function(req, res, next) {
    Customer.findOne(req.param('id'), function foundCustomer(err, customer) {
      if (err) return next(err);
      if (!customer) return next();
      res.view({
        customer: customer
      });
    });
  },

  index: function(req, res, next) {
    Customer.find(function foundCustomers (err, customers) {
      if (err) return next(err);
      res.view({
        customers: customers
      });
    });
  }


};
