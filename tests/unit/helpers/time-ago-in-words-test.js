import {
  timeAgoInWords
} from 'ember-cli-dates/helpers/time-ago-in-words';

module('TimeAgoInWordsHelper');

test('it produces the correct moment string', function() {
  var result = timeAgoInWords(window.moment().seconds(-31));
  equal(result, 'a minute ago');
});
