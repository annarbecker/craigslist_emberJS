import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteListing(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
      this.sendAction('destroyListing', listing);
      }
    }
  }
});
