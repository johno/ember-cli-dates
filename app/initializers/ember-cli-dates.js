import Ember from 'ember';
import { timeFormat } from 'ember-cli-dates/helpers/time-format';
import { timeAgoInWords } from 'ember-cli-dates/helpers/time-ago-in-words';
import { dayOfTheWeek } from 'ember-cli-dates/helpers/day-of-the-week';
import { timeAheadInWords } from 'ember-cli-dates/helpers/time-ahead-in-words';
import { timeDeltaInWords } from 'ember-cli-dates/helpers/time-delta-in-words';
import { monthAndYear } from 'ember-cli-dates/helpers/month-and-year';
import { monthAndDay } from 'ember-cli-dates/helpers/month-and-day';
import { dateAndTime } from 'ember-cli-dates/helpers/date-and-time';

export var initialize = function(/* container, app */) {
  Ember.Handlebars.helper('time-format', timeFormat);
  Ember.Handlebars.helper('time-ago-in-words', timeAgoInWords);
  Ember.Handlebars.helper('day-of-the-week', dayOfTheWeek);
  Ember.Handlebars.helper('time-ahead-in-words', timeAheadInWords);
  Ember.Handlebars.helper('time-delta-in-words', timeDeltaInWords);
  Ember.Handlebars.helper('month-and-year', monthAndYear);
  Ember.Handlebars.helper('month-and-day', monthAndDay);
  Ember.Handlebars.helper('date-and-time', dateAndTime);
};

export default {
  name: 'ember-cli-dates',
  initialize: initialize
};
