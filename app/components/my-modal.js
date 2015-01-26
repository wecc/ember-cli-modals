import Ember from 'ember';

export default Ember.Component.extend({
  closeText: 'Close',
  okText: 'Ok',
  actions: {
    ok: function() {
      this.$('.modal').modal('hide');
      this.sendAction('ok');
    }
  },
  didInsertElement: function() {
    Ember.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }
});
