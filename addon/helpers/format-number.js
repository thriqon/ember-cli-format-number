import Ember from 'ember';
import numeral from 'numeral';

export function formatNumber(params, hash) {
	let { format } = hash || {};
	return numeral(params).format(format);
}

export default Ember.Helper.helper(formatNumber);
