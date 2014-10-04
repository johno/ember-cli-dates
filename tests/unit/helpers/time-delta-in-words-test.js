import {
  timeDeltaInWords
} from 'ember-cli-dates/helpers/time-delta-in-words';

module('TimeDeltaInWordsHelper');

test('it produces the correct moment string for past date', function() {
  var result = timeDeltaInWords(window.moment().seconds(-60*60*25));
  equal(result, 'a day ago');
});

test('it produces the correct moment string', function() {
  var result = timeDeltaInWords(window.moment().seconds(60*60*25));
  equal(result, 'in a day');
});
