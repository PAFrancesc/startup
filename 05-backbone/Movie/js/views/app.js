// js/views/app.js

var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#movieapp',

  events: {
    'click #new-movie': 'create',
  },

  initialize: function() {
    this.$input1 = this.$('#new-movie-title');
    this.$input2 = this.$('#new-movie-year');
    this.$input3 = this.$('#new-movie-genre');
    this.$main = this.$('#main');
    this.listenTo(app.Movies, 'add', this.addOne);
    this.listenTo(app.Movies, 'reset', this.addAll);
    this.listenTo(app.Movies, 'change', this.addAll);
    app.Movies.fetch();
  },

  addOne: function( movie ) {
    var view = new app.MovieView({ model: movie });
    $('#movie-list').append( view.render().el );
  },

  addAll: function() {
    this.$('#movie-list').html('');
    app.Movies.each(this.addOne, this);
  },

  newAttributes: function() {
    return {
      title: this.$input1.val().trim(),
      year: this.$input2.val().trim(),
      genre: this.$input3.val().trim(),
    };
  },

  create: function( event ) {
    if ( !this.$input1.val().trim() || !this.$input2.val().trim() || !this.$input3.val().trim()) {
      return;
    }

    app.Movies.create( this.newAttributes() ); 
    console.log(app.Movies);
    this.$input1.val('');
    this.$input2.val('');
    this.$input3.val('');
  }

});