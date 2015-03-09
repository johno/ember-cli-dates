import moment from 'moment';
import { timeDeltaInWords } from 'ember-cli-dates/helpers/time-delta-in-words';
import { module, test } from 'qunit';

module('TimeDeltaInWordsHelper');

moment.locale('en');

var FAKE_HBS_CONTEXT = {},
    dateYesterday    = new Date(new Date().valueOf() - 1000*3600*24),
    momentYesterday  = moment().subtract(1, 'days');

test('one arg (date)', function(assert) {
  assert.equal(timeDeltaInWords(dateYesterday, FAKE_HBS_CONTEXT), 'a day ago');
});

test('one arg (moment)', function(assert) {
  assert.equal(timeDeltaInWords(momentYesterday, FAKE_HBS_CONTEXT), 'a day ago');
});

test('locale pt-br', function(assert) {
  assert.equal(timeDeltaInWords(dateYesterday, 'pt-br', FAKE_HBS_CONTEXT), 'um dia atrás');
});

test('null date', function(assert) {
  assert.equal(timeDeltaInWords(null, FAKE_HBS_CONTEXT), '');
});

test('blank date', function(assert) {
  assert.equal(timeDeltaInWords(' ', FAKE_HBS_CONTEXT), '');
});
