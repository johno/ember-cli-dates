import moment from 'moment';
import { timeAgoInWords } from 'ember-cli-dates/helpers/time-ago-in-words';

module('TimeAgoInWordsHelper');

var FAKE_HBS_CONTEXT = {};

var dateYesterday = new Date(new Date().valueOf() - 1000*3600*24);
var momentYesterday = moment().subtract(1, 'days');

test('one arg (date)', function() {
  equal(timeAgoInWords(dateYesterday, FAKE_HBS_CONTEXT), 'a day ago');
});

test('one arg (moment)', function() {
  equal(timeAgoInWords(momentYesterday, FAKE_HBS_CONTEXT), 'a day ago');
});

