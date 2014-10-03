import Ember from 'ember';

function timeDeltaInWords(date) {
  return window.moment(date).fromNow();
}

export { timeDeltaInWords };

export default Ember.Handlebars.makeBoundHelper(timeDeltaInWords);
