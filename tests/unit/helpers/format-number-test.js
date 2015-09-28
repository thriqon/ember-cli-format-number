import { formatNumber } from '../../../helpers/format-number';
import { module, test } from 'qunit';

module('Unit | Helper | format number');

test('it renders 7884486213 as 7.3GB', function (assert) {
	assert.equal(formatNumber(7884486213, {format: '0.0b'}), '7.3GB');
});

test('it renders 1230974 as 1.2m', function (assert) {
	assert.equal(formatNumber(1230974, {format: '0.0a'}), '1.2m');
});

test('renders [1000] as 1,000', function(assert) {
  assert.equal(formatNumber([1000], {format: '0,0'}), '1,000');
});

test('it renders undefined as 0', function(assert) {
  assert.equal(formatNumber(undefined), '0');
});

test('renders NaN as 0', function(assert) {
  assert.equal(formatNumber(NaN), 0);
});
