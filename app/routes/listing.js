import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params.listing_id);
    return this.store.findRecord('listing', params.listing_id);
  }
});
