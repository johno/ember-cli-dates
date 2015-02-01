import moment from 'moment';
import { dateAndTime } from 'ember-cli-dates/helpers/date-and-time';

module('DateAndTimeHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function() {
  equal(dateAndTime(dateJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('one arg (moment)', function() {
  equal(dateAndTime(momentJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('one arg (literal)', function() {
  equal(dateAndTime(literalJanuary, FAKE_HBS_CONTEXT), 'January 1, 2014 12:00 AM');
});

test('locale pt-br', function() {
  equal(dateAndTime(dateJanuary, 'pt-br', FAKE_HBS_CONTEXT), '1 de janeiro de 2014 às 00:00');
});

test('null date', function() {
  equal(dateAndTime(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function() {
  equal(dateAndTime(' ', FAKE_HBS_CONTEXT), '');
});
