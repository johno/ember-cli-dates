/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-dates',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/moment/moment.js');
    this.app.import(app.bowerDirectory + '/ember-cli-moment-shim/moment-shim.js', {
      exports: {
        moment: ['default']
      }
    });
  }
};
