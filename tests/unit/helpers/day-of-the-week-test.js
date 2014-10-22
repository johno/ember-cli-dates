import moment from 'moment';
import { dayOfTheWeek } from 'ember-cli-dates/helpers/day-of-the-week';

module('DayOfTheWeekHelper');

var FAKE_HBS_CONTEXT = {};

var dateJanuary = new Date(2014, 0, 1);
var momentJanuary = moment('2014-01-01');
var literalJanuary = '2014/01/01';

test('one arg (date)', function() {
  equal(dayOfTheWeek(dateJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('one arg (moment)', function() {
  equal(dayOfTheWeek(momentJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('one arg (literal)', function() {
  equal(dayOfTheWeek(literalJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

