var proxy = require('express-http-proxy');
var app = require('express')();
const bodyParser = require('body-parser');


app.use(bodyParser.text());


app.use('/', proxy('www.google.com', {
  filter: function(req, res) {
     console.log(req.body);
     return req.body.indexOf('xyz') > -1;
  }
}));


app.use('/', proxy('www.bing.com', {
  filter: function(req, res) {
     console.log(req.body);
     return req.body.indexOf('abc') > -1;
  }
}));


app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app;