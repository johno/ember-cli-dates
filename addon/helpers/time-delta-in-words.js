import Ember from 'ember';
import moment from 'moment';
import timeLocale from '../utils/time-locale';
import validArgs from '../utils/valid-args';

function timeDeltaInWords(date, optionalLocale) {
  validArgs(arguments, 'time-delta-in-words');

  var locale = timeLocale(optionalLocale);

  return moment(date).locale(locale).fromNow();
}

export { timeDeltaInWords };

export default Ember.Handlebars.makeBoundHelper(timeDeltaInWords);
