import Ember from 'ember';

function timeAgoInWords(date) {
  return moment(date).fromNow() + ' ago';
}

export { timeAgoInWords };

export default Ember.Handlebars.makeBoundHelper(timeAgoInWords);
