import Ember from 'ember';
import moment from 'moment';

function timeDeltaInWords(date) {
  return moment(date).fromNow();
}

export { timeDeltaInWords };

export default Ember.Handlebars.makeBoundHelper(timeDeltaInWords);
