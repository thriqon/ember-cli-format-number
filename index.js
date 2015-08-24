/* jshint node: true */
'use strict';

module.exports = {
	name: 'ember-cli-format-number',
	included: function (app, parentAddon) {
		this._super.included(app, parentAddon);

		var target = parentAddon || app;

		target.import(target.bowerDirectory + "/numeral/numeral.js", {
			type: 'vendor'
		});
		target.import(target.bowerDirectory + "/numeral/languages.js", {
			type: 'vendor'
		});
		target.import("vendor/ember-cli-format-number/shim.js", {
			type: 'vendor',
			exports: {
				'numeral': ['default']
			}
		});
	}
};
