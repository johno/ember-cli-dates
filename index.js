'user strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-dates',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/moment/moment.js');
  }
};
