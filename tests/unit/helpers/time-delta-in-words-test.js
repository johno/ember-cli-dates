import moment from 'moment';
import { timeDeltaInWords } from 'ember-cli-dates/helpers/time-delta-in-words';

module('TimeDeltaInWordsHelper');

var FAKE_HBS_CONTEXT = {};

var dateYesterday = new Date(new Date().valueOf() - 1000*3600*24);
var momentYesterday = moment().subtract(1, 'days');

test('one arg (date)', function() {
  equal(timeDeltaInWords(dateYesterday, FAKE_HBS_CONTEXT), 'a day ago');
});

test('one arg (moment)', function() {
  equal(timeDeltaInWords(momentYesterday, FAKE_HBS_CONTEXT), 'a day ago');
});

