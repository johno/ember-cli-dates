import {
  timeFormat
} from 'ember-cli-dates/helpers/time-format';

module('TimeFormatHelper');

// Replace this with your real tests.
test('it produces the correct format', function() {
  equal(timeFormat('10/09/2014', 'l'), '10/9/2014');
  equal(timeFormat('10/09/2014', 'dddd'), 'Thursday');
});
