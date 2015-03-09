import moment from 'moment';
import { dateAndTime } from 'ember-cli-dates/helpers/date-and-time';
import { module, test } from 'qunit';

module('DateAndTimeHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function(assert) {
  assert.equal(dateAndTime(dateJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('one arg (moment)', function(assert) {
  assert.equal(dateAndTime(momentJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('one arg (literal)', function(assert) {
  assert.equal(dateAndTime(literalJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('locale pt-br', function(assert) {
  assert.equal(dateAndTime(dateJanuary, 'pt-br', FAKE_HBS_CONTEXT), '1 de janeiro de 2014 às 00:00');
});

test('null date', function(assert) {
  assert.equal(dateAndTime(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function(assert) {
  assert.equal(dateAndTime(' ', FAKE_HBS_CONTEXT), '');
});
