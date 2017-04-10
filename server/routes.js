/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  app.use('/api/pois', require('./api/poi'));

    app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
