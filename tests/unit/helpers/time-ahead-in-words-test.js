import moment from 'moment';
import { timeAheadInWords } from 'ember-cli-dates/helpers/time-ahead-in-words';

module('TimeAheadInWordsHelper');

var FAKE_HBS_CONTEXT = {};

var dateTomorrow = new Date(new Date().valueOf() + 1000*3600*24);
var momentTomorrow = moment().add(1, 'days');

test('one arg (date)', function() {
  equal(timeAheadInWords(dateTomorrow, FAKE_HBS_CONTEXT), 'in a day');
});

test('one arg (moment)', function() {
  equal(timeAheadInWords(momentTomorrow, FAKE_HBS_CONTEXT), 'in a day');
});



