import Ember from 'ember';
import moment from 'moment';

function timeAheadInWords(date) {
  return moment(date).fromNow();
}

export { timeAheadInWords };

export default Ember.Handlebars.makeBoundHelper(timeAheadInWords);
