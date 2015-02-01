import moment from 'moment';
import { monthAndDay } from 'ember-cli-dates/helpers/month-and-day';

module('MonthAndDayHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function() {
  equal(monthAndDay(dateJanuary, FAKE_HBS_CONTEXT), 'Jan 1st');
});

test('one arg (moment)', function() {
  equal(monthAndDay(momentJanuary, FAKE_HBS_CONTEXT), 'Jan 1st');
});

test('one arg (literal)', function() {
  equal(monthAndDay(literalJanuary, FAKE_HBS_CONTEXT), 'Jan 1st');
});

test('locale pt-br', function() {
  equal(monthAndDay(dateJanuary, 'pt-br', FAKE_HBS_CONTEXT), 'jan 1º');
});

test('null date', function() {
  equal(monthAndDay(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function() {
  equal(monthAndDay(' ', FAKE_HBS_CONTEXT), '');
});
