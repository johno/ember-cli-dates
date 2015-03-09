import moment from 'moment';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';
import { module, test } from 'qunit';

module('TimeFormatHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function(assert) {
  assert.equal(timeFormat(dateJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014');
});

test('one arg (moment)', function(assert) {
  assert.equal(timeFormat(momentJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014');
});

test('one arg (literal)', function(assert) {
  assert.equal(timeFormat(literalJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014');
});

test('two args (date, format)', function(assert) {
  assert.equal(timeFormat(dateJanuary, 'LLL', FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('two args (moment, format)', function(assert) {
  assert.equal(timeFormat(momentJanuary, 'LLL', FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('two args (literal, format)', function(assert) {
  assert.equal(timeFormat(literalJanuary, 'LLL', FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('locale pt-br', function(assert) {
  assert.equal(timeFormat(dateJanuary, 'LL', 'pt-br', FAKE_HBS_CONTEXT), '1 de janeiro de 2014');
});

test('null date', function(assert) {
  assert.equal(timeFormat(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function(assert) {
  assert.equal(timeFormat(' ', FAKE_HBS_CONTEXT), '');
});
