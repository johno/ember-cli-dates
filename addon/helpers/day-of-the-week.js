import Ember from 'ember';
import moment from 'moment';
import timeLocale from '../utils/time-locale';
import validArgs from '../utils/valid-args';

function dayOfTheWeek(date, optionalLocale) {
  validArgs(arguments, 'day-of-the-week');

  var locale = timeLocale(optionalLocale);

  return moment(date).locale(locale).format('dddd');
}

export {
  dayOfTheWeek
};

export default Ember.Handlebars.makeBoundHelper(dayOfTheWeek);
