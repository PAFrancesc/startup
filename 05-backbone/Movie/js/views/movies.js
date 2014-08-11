var app = app || {};

app.MovieView = Backbone.View.extend({

  tagName: 'div',

  template: _.template( $('#item-template').html() ),

  events: {
    'click .destroy': 'clear', 
    'click .edit': 'edit', 
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  },

  clear: function() {
    this.model.destroy();
  },

  edit: function( movie ) {
    var view = new app.EditView({ model: this.model });
    $('#edit-list').html( view.render().el );
  },

});