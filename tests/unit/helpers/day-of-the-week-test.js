import {
  dayOfTheWeek
} from 'ember-cli-dates/helpers/day-of-the-week';

module('DayOfTheWeekHelper');

// Replace this with your real tests.
test('it works', function() {
  equal(dayOfTheWeek('10/09/2014', 'dddd'), 'Thursday');
});
