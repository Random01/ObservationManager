var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.use(app.router);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000, function() {
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});