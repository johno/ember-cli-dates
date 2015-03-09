import moment from 'moment';
import { timeAheadInWords } from 'ember-cli-dates/helpers/time-ahead-in-words';
import { module, test } from 'qunit';

module('TimeAheadInWordsHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateTomorrow     = new Date(new Date().valueOf() + 1000*3600*24),
    momentTomorrow   = moment().add(1, 'days');

test('one arg (date)', function(assert) {
  assert.equal(timeAheadInWords(dateTomorrow, FAKE_HBS_CONTEXT), 'in a day');
});

test('one arg (moment)', function(assert) {
  assert.equal(timeAheadInWords(momentTomorrow, FAKE_HBS_CONTEXT), 'in a day');
});

test('locale pt-br', function(assert) {
  assert.equal(timeAheadInWords(dateTomorrow, 'pt-br', FAKE_HBS_CONTEXT), 'em um dia');
});

test('null date', function(assert) {
  assert.equal(timeAheadInWords(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function(assert) {
  assert.equal(timeAheadInWords(' ', FAKE_HBS_CONTEXT), '');
});
