import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params = {
        title: this.get('title'),
        description: this.get ('description'),
        price: parseInt(this.get('price')),
        photo: this.get('photo'),
        category: this.get('category'),
        date: Date.now()
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
