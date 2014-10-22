import Ember from 'ember';
import moment from 'moment';

function timeFormat(date, format) {
  var length = arguments.length;
  var output;

  if (length === 1) {
    throw new TypeError('Invalid Number of arguments, expected at least 1');
  } else if (length === 2) {
    output = 'LL';
  } else {
    output = format;
  }

  return moment(date).format(output);
}

export {
  timeFormat
};

export default Ember.Handlebars.makeBoundHelper(timeFormat);
