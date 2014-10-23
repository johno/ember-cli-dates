import Ember from 'ember';
import moment from 'moment';
import timeLocale from '../utils/time-locale';
import validArgs from '../utils/valid-args';

function timeFormat(date, optionalFormat, optionalLocale) {
  validArgs(arguments, 'time-format');

  var locale = timeLocale(optionalLocale),
      format = 'LL';

  if (Ember.typeOf(optionalFormat) === 'string') {
    format = optionalFormat;
  }

  return moment(date).locale(locale).format(format);
}

export {
  timeFormat
};

export default Ember.Handlebars.makeBoundHelper(timeFormat);
