import Ember from 'ember';
import moment from 'moment';

export default function timeLocale(optionalLocale) {
  if (Ember.typeOf(optionalLocale) === 'string') {
    return optionalLocale;
  }

  return moment().locale();
}
