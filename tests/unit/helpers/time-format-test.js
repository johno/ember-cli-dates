import moment from 'moment';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';

module('TimeFormatHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function() {
  equal(timeFormat(dateJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014');
});

test('one arg (moment)', function() {
  equal(timeFormat(momentJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014');
});

test('one arg (literal)', function() {
  equal(timeFormat(literalJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014');
});

test('two args (date, format)', function() {
  equal(timeFormat(dateJanuary, 'LLL', FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('two args (moment, format)', function() {
  equal(timeFormat(momentJanuary, 'LLL', FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('two args (literal, format)', function() {
  equal(timeFormat(literalJanuary, 'LLL', FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('locale pt-br', function() {
  equal(timeFormat(dateJanuary, 'LL', 'pt-br', FAKE_HBS_CONTEXT), '1 de janeiro de 2014');
});

test('null date', function() {
  equal(timeFormat(null, FAKE_HBS_CONTEXT), '');
});


test('blank date', function() {
  equal(timeFormat(' ', FAKE_HBS_CONTEXT), '');
});
