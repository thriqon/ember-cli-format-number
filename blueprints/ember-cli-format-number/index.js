module.exports = {
	description: 'install numeral.js'
	normalizeEntityName: function () {},
	afterInstall: function () {
		return this.addBowerPackageToProject('numeral');
	}
};
