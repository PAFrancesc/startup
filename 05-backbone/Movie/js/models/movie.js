  var app = app || {};
  // Movie Model
  app.Movie = Backbone.Model.extend({
    // Default attributes ensure that each movie created has title, year and genre.
    defaults: {
      title: '',
      year: '',
      genre: '',
    }

  });