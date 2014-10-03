import Ember from 'ember';

function timeAheadInWords(date) {
  return moment(date).fromNow();
}

export { timeAheadInWords };

export default Ember.Handlebars.makeBoundHelper(timeAheadInWords);
