var app = app || {};
// Movies Collection
// ---------------
var MovieList = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: app.Movie,
  // Save all of the movie items under the `"movies-backbone"` namespace.
  localStorage: new Backbone.LocalStorage('movies-backbone'),
});

// Create our global collection of **movies**.
app.Movies = new MovieList();