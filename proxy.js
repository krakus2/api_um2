var express   = require('express'),
    httpProxy = require('http-proxy'),
    app       = express();

var proxy = new httpProxy.RoutingProxy();

function apiProxy(host, port) {
  return function(req, res, next) {
    if(req.url.match(new RegExp('^api'))) {
      proxy.proxyRequest(req, res, {host host, port port});
    } else {
      next();
    }
  }
}

app.configure(function() {
  app.use(express.static(process.cwd() + generated));
  app.use(apiProxy('localhost', 3000));
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});

module.exports = app;
