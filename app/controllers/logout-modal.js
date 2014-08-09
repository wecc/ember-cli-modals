import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function() {
      alert('logout');
    }
  }
});
