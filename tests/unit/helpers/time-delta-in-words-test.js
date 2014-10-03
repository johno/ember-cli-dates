import {
  timeDeltaInWords
} from 'ember-cli-dates/helpers/time-delta-in-words';

module('TimeDeltaInWordsHelper');

test('it produces the correct moment string for past date', function() {
  var result = timeDeltaInWords(window.moment().seconds(-31));
  equal(result, 'a minute ago');
});
