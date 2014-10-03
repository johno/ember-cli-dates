import Ember from 'ember';

function timeDeltaInWords(date) {
  return moment(date).fromNow();
}

export { timeDeltaInWords };

export default Ember.Handlebars.makeBoundHelper(timeDeltaInWords);
