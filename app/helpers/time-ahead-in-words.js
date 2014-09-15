import Ember from 'ember';

function timeAheadInWords(date) {
  return 'in ' + moment(date).fromNow();
}

export { timeAheadInWords };

export default Ember.Handlebars.makeBoundHelper(timeAheadInWords);
