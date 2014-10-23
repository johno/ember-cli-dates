import Ember from 'ember';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';
import { timeAgoInWords } from 'ember-cli-dates/helpers/time-ago-in-words';
import { dayOfTheWeek } from 'ember-cli-dates/helpers/day-of-the-week';
import { timeAheadInWords } from 'ember-cli-dates/helpers/time-ahead-in-words';
import { timeDeltaInWords } from 'ember-cli-dates/helpers/time-delta-in-words';

export var initialize = function(/* container, app */) {
  Ember.Handlebars.helper('time-format', timeFormat);
  Ember.Handlebars.helper('time-ago-in-words', timeAgoInWords);
  Ember.Handlebars.helper('day-of-the-week', dayOfTheWeek);
  Ember.Handlebars.helper('time-ahead-in-words', timeAheadInWords);
  Ember.Handlebars.helper('time-delta-in-words', timeDeltaInWords);
};

export default {
  name: 'ember-cli-dates',
  initialize: initialize
};

