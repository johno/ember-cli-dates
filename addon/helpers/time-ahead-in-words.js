import Ember from 'ember';
import moment from 'moment';
import timeLocale from '../utils/time-locale';
import validArgs from '../utils/valid-args';

function timeAheadInWords(date, optionalLocale) {
  validArgs(arguments, 'time-ahead-in-words');

  var locale = timeLocale(optionalLocale);

  return moment(date).locale(locale).fromNow();
}

export { timeAheadInWords };

export default Ember.Handlebars.makeBoundHelper(timeAheadInWords);
