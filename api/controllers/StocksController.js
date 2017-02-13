/**
 * Created by Bathoin on 2/7/2017.
 */
module.exports = {

  'new':function(req, res) {
    res.view();

  },

  create: function(req, res, next) {
    Stocks.create(req.params.all(), function StocksCreated(err, Stocks) {
      if (err) return next(err);

      res.redirect('/Stocks/show/' + Stocks.id);
    });
  },

  show: function(req, res, next) {
    Stocks.findOne(req.param('id'), function foundStocks(err, Stocks) {
      if (err) return next(err);
      if (!Stocks) return next();
      res.view({
        Stocks: Stocks
      });
    });
  },

  index:function(req,res,next){
    Stocks.find(function foundStocks(err, Stocks){
      if (err) return next(err);

      res.view({
        Stocks: Stocks

      });
    });
  },

  edit: function(req,res,next){
    Stocks.findOne(req.param('id'), function foundStocks(err, Stocks) {
      if (err) return next(err);
      if (!Stocks) return next();
      res.view({
        Stocks: Stocks
      });
    });
  },

  update : function (req, res, next) {
    Stocks.update(req.param('id'), req.params.all(), function StocksUpdated(err){
      if (err) {
        return res.redirect('/Stocks/edit/' + req.param('id'));
      }
      res.redirect('/Stocks/show/' + req.param('id'));
    })
  },
  destroy: function(req, res, next) {
    Stocks.destroy(req.param('id')).exec(function () {
      res.redirect('/Stocks/');
    });
  }


};
