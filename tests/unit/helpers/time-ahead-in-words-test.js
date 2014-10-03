import {
  timeAheadInWords
} from 'ember-cli-dates/helpers/time-ahead-in-words';

module('TimeAheadInWordsHelper');

test('it produces the correct moment string', function() {
  var result = timeAheadInWords(window.moment().seconds(51));
  equal(result, 'in a few seconds');
});
