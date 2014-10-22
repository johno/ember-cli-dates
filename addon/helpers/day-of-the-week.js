import Ember from 'ember';
import moment from 'moment';

function dayOfTheWeek(date) {
  return moment(date).format('dddd');
}

export {
  dayOfTheWeek
};

export default Ember.Handlebars.makeBoundHelper(dayOfTheWeek);
