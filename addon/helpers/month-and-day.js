import Ember from 'ember';
import moment from 'moment';
import timeLocale from 'ember-cli-dates/utils/time-locale';
import validArgs from 'ember-cli-dates/utils/valid-args';

function monthAndDay(date, optionalLocale) {
  validArgs(arguments, 'day-of-the-week');

  if (Ember.isBlank(date)) { return ''; }

  var locale = timeLocale(optionalLocale);

  return moment(date).locale(locale).format('MMM Do');
}

export { monthAndDay };

export default Ember.Handlebars.makeBoundHelper(monthAndDay);
