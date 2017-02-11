/**
 * Created by Bathoin on 2/5/2017.
 */
module.exports = {

  'new':function(req, res) {
    res.view();

  },

  create: function(req, res, next) {
    Nonstock.create(req.params.all(), function NonstockCreated(err, Nonstock) {
      if (err) return next(err);

      res.redirect('/Nonstock/show/' + Nonstock.id);
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

  }

};
