/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-format-number',
  options: {
    nodeAssets: {
      numeral: {
        import: ['numeral.js', 'languages.js']
      }
    }
  },
  included: function (app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = parentAddon || app;

    target.import("vendor/ember-cli-format-number/shim.js", {
      type: 'vendor',
      exports: {
        'numeral': ['default']
      }
    });
  }
};
