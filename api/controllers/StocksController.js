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
  }


};
