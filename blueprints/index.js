'use strict';

module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('momentjs', '^2.8.3');
  }
};
