import Ember from 'ember';

export default function validArgs(args, helper) {
  if (Ember.isEmpty(args) || args.length === 1) {
    throw new Ember.Error('[ember-cli-dates:' + helper + '] Invalid number of arguments, expected at least 1');
  }
}
