exports.start = function() {
  var httpProxy = require('http-proxy');
  var http = require('http');
  var proxy = httpProxy.createProxyServer({});
  var server = http.createServer(function(req, res) {
    var port = 8081;
    if (req.header['Authorization']) {
      var authorized = http.post('localhost:8081/authorize', function(req, res) {

      });
      console.log(user);
      if (/^\/api\/bookmark/.exec(req.url)) {
        console.log('Routing to /api/bookmark');
          port = '8080';
      }
    } else {
      if (/^\/api\/request/.exec(req.url)) {
        console.log('Routing to /api/request');
          port = '1337';
      }
    }

    if(port == 8081) console.log('Routing to auth-api');
    proxy.web(req, res,
      {
        target: 'http://localhost:' + port
      });

  });
  server.listen(8000);
};
