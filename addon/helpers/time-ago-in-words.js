import Ember from 'ember';
import moment from 'moment';
import timeLocale from 'ember-cli-dates/utils/time-locale';
import validArgs from 'ember-cli-dates/utils/valid-args';

function timeAgoInWords(date, optionalLocale) {
  validArgs(arguments, 'time-ago-in-words');

  if (Ember.isBlank(date)) { return ''; }

  var locale = timeLocale(optionalLocale);

  return moment(date).locale(locale).fromNow();
}

export { timeAgoInWords };

export default Ember.Handlebars.makeBoundHelper(timeAgoInWords);
