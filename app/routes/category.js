import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    listingSave3(listingParams) {
      var newListing = this.store.createRecord('listing', listingParams);
      var category = listingParams.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
    }
  }
});
