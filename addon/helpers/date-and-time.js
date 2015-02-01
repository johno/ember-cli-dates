import Ember from 'ember';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';

function dateAndTime(date, optionalLocale) {
  return timeFormat(date, 'LLL', optionalLocale);
}

export { dateAndTime };

export default Ember.Handlebars.makeBoundHelper(dateAndTime);
