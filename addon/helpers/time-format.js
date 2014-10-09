import Ember from 'ember';

function timeFormat(date, format) {
  format = format || 'LL';
  return moment(date).format(format);
}

export {
  timeFormat
};

export default Ember.Handlebars.makeBoundHelper(timeFormat);
