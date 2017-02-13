/**
 * Created by Bathoin on 2/5/2017.
 */
module.exports = {

  'new':function(req, res, err) {
    Customer.findOne(req.param('owner'), function foundCustomer (err, customer) {
      if (err) return next (err);
      if (!customer) return next();
      res.view({
        customer: customer
      });
    });

  },

  create: function(req, res, next) {
    Nonstock.create(req.params.all(), function NonstockCreated(err, Nonstock) {
      if (err) return next(err);
      res.json(Nonstock); // forward slash out if not needed
      //res.redirect('/Nonstock/show/' + Nonstock.id);
    });
  },

  show: function(req, res, next) {
    Nonstock.findOne(req.param('id'), function foundNonstock(err, Nonstock) {
      if (err) return next(err);
      if (!Nonstock) return next();
      res.view({
        Nonstock: Nonstock
      });
    });
  },

  index:function(req,res,next){
    Nonstock.find(function foundNonstock(err, Nonstock){
      if (err) return next(err);

      res.view({
        Nonstock: Nonstock

      });
    });

  },

  edit: function(req,res,next){
    Nonstock.findOne(req.param('id'), function foundNonstock(err, Nonstock) {
      if (err) return next(err);
      if (!Nonstock) return next();
      res.view({
        Nonstock: Nonstock
      });
    });

  },

  update : function (req, res, next) {
    Nonstock.update(req.param('id'), req.params.all(), function NonstockUpdated(err){
      if (err) {
        return res.redirect('/Nonstock/edit/' + req.param('id'));
      }
      res.redirect('/Nonstock/show/' + req.param('id'));
    })
  },
  destroy: function(req, res, next) {
    Nonstock.destroy(req.param('id')).exec(function () {
      res.redirect('/Nonstock/');
    });
  }

};
