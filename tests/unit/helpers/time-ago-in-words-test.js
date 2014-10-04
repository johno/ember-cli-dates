import {
  timeAgoInWords
} from 'ember-cli-dates/helpers/time-ago-in-words';

module('TimeAgoInWordsHelper');

test('it produces the correct moment string', function() {
  var result = timeAgoInWords(window.moment().seconds(-60*60*25));
  equal(result, 'a day ago');
});
