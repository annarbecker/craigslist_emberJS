import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    listingSave3(listingParams) {
      var newListing = this.store.createRecord('listing', listingParams);
      newListing.save();
    }
  }
});
