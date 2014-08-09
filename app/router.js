import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCliModalsENV.locationType
});

Router.map(function() {
  this.route('application');
});

export default Router;
