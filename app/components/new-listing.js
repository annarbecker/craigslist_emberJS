import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    listingSave1() {
      var listingParams = {
        title: this.get('title'),
        description: this.get ('description'),
        price: this.get('price'),
        photo: this.get('photo'),
        category: this.get('category')
      };
      console.log(listingParams);
      this.set('addNewListing', false);
      this.sendAction('listingSave2', listingParams);
    }
  }
});
