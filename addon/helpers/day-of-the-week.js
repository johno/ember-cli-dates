import Ember from 'ember';

function dayOfTheWeek(date) {
  return moment(date).format('dddd');
}

export {
  dayOfTheWeek
};

export default Ember.Handlebars.makeBoundHelper(dayOfTheWeek);
