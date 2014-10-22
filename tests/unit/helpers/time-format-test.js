import moment from 'moment';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';

module('TimeFormatHelper');

var FAKE_HBS_CONTEXT = {};

var dateJanuary = new Date(2014, 0, 1);
var momentJanuary = moment('2014-01-01');
var literalJanuary = '2014/01/01';

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
