import moment from 'moment';
import { dayOfTheWeek } from 'ember-cli-dates/helpers/day-of-the-week';

module('DayOfTheWeekHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function() {
  equal(dayOfTheWeek(dateJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('one arg (moment)', function() {
  equal(dayOfTheWeek(momentJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('one arg (literal)', function() {
  equal(dayOfTheWeek(literalJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('locale pt-br', function() {
  equal(dayOfTheWeek(dateJanuary, 'pt-br', FAKE_HBS_CONTEXT), 'quarta-feira');
});

test('null date', function() {
  equal(dayOfTheWeek(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function() {
  equal(dayOfTheWeek(' ', FAKE_HBS_CONTEXT), '');
});
