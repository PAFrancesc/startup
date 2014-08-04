define('Movie',['Director'], function(Director)
{ 
  function Movie(title, year, length) {
    this.fields= {
      'title': title,
      'year': year,
      'length': length,
      'director': '',
    };
    console.log("Movie Created: " + this.get('title'));
  }
    Movie.prototype = {
      constructor: Movie,
      play:function ()  {
        console.log("playing",this.get('title'));
      },
      stop:function ()  {
        console.log("stopped",this.get('title'));
      },
      set:function (attr, value)  {
        this.fields[attr] = value;
        console.log ("Update: "+attr+" to : "+value);
      },
      get:function (attr) {
        return this.fields[attr];
      }
    }
  return Movie;
});