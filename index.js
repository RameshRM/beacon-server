'use strict';

var debug = require('debug')('beacon-server');
var app = require('express')();
var modUtils = require('./lib/mod-utils');
var listener = app.listen(0);
app.get('/', function home(req, res) {
	res.status(200).send('Beacon Server running on port' + listener.address().port);
});

app.get('/images/beacon', function beacon(req, res) {
	res.set({
		'Content-Type': 'image/gif'
	});
	res.end(modUtils.beacon.generate(), 'binary');
});
debug('Server running on port %s', listener.address().port);
