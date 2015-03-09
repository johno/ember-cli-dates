import moment from 'moment';
import { monthAndYear } from 'ember-cli-dates/helpers/month-and-year';
import { module, test } from 'qunit';

module('MonthAndYearHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function(assert) {
  assert.equal(monthAndYear(dateJanuary, FAKE_HBS_CONTEXT), 'Jan 2014');
});

test('one arg (moment)', function(assert) {
  assert.equal(monthAndYear(momentJanuary, FAKE_HBS_CONTEXT), 'Jan 2014');
});

test('one arg (literal)', function(assert) {
  assert.equal(monthAndYear(literalJanuary, FAKE_HBS_CONTEXT), 'Jan 2014');
});

test('locale pt-br', function(assert) {
  assert.equal(monthAndYear(dateJanuary, 'pt-br', FAKE_HBS_CONTEXT), 'jan 2014');
});

test('null date', function(assert) {
  assert.equal(monthAndYear(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function(assert) {
  assert.equal(monthAndYear(' ', FAKE_HBS_CONTEXT), '');
});
