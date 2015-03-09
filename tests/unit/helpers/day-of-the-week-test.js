import moment from 'moment';
import { dayOfTheWeek } from 'ember-cli-dates/helpers/day-of-the-week';
import { module, test } from 'qunit';

module('DayOfTheWeekHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateJanuary      = new Date(2014, 0, 1),
    momentJanuary    = moment('2014-01-01'),
    literalJanuary   = '2014/01/01';

test('one arg (date)', function(assert) {
  assert.equal(dayOfTheWeek(dateJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('one arg (moment)', function(assert) {
  assert.equal(dayOfTheWeek(momentJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('one arg (literal)', function(assert) {
  assert.equal(dayOfTheWeek(literalJanuary, FAKE_HBS_CONTEXT), 'Wednesday');
});

test('locale pt-br', function(assert) {
  assert.equal(dayOfTheWeek(dateJanuary, 'pt-br', FAKE_HBS_CONTEXT), 'quarta-feira');
});

test('null date', function(assert) {
  assert.equal(dayOfTheWeek(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function(assert) {
  assert.equal(dayOfTheWeek(' ', FAKE_HBS_CONTEXT), '');
});
