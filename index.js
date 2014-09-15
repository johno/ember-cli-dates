'use strict';

module.exports = {
  name: 'ember-cli-dates',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import("bower_components/moment/moment.js");
  }
};
