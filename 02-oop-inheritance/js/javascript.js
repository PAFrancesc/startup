var Movie = function(title, year, length, obj) {
  this.fields= {
    'title': title,
    'year': year,
    'length': length,
  };

  this.observers = obj;

  console.log("Movie Created: " + this.fields.title);
}

Movie.prototype = {
  constructor: Movie,
  play:function ()  {
    this.notify("playing",this.get('title'));
  },
  stop:function ()  {
    this.notify("stopped",this.get('title'));
  },
  set:function (attr, value)  {
    this.fields[attr] = value;
    console.log ("Update: "+attr+" to : "+value);
  },
  get:function (attr) {
    return this.fields[attr];
  },
  addObserver:function(obj){
    this.observers.push(obj);
  },
  notify:function( observer, movie ){
    this.observers[observer](movie);
  }
}

var Social = function() {}
Social.prototype = {
  share:function (friendName)  {
    console.log ("Sharing "+ this.fields.title +" with "+friendName);  
  }
}
Social.prototype.like = function () {}
_.extend( Movie.prototype, Social.prototype );

var myMovie = (function() {
  var title;
  var year;
  var length;
     
  return {
    play:function ()  {
      console.log ("Start playing: "+this.get('title')+', '+this.get('year')+', '+this.get('length'));  
    },
    stop:function ()  {
      console.log(this.get('title') +  " was stopped.");
    },
    set:function (attr, value)  {
      this[attr] = value;
      console.log ("Update: "+attr+" to : "+value);
    },
    get:function (attr) {
      return this[attr];
    }
  };
})();

function Actor (names, ages, nationality) {
  this.fields= {
    'name' : names,
    'age' : ages,
    'nacionality' : nationality,
  }
  console.log("Actor Created: " + this.fields.name)
}
Actor.prototype = {
  constructor: Actor,
  get:function (attr) {
    return this[attr];
  }
}

var movieObserver = {
  playing : function(title) {
    console.log( 'Playing: ', title );
  },
  stopped : function(title) {
    console.log( 'Stopped: ', title );
  }
}

function DownloadableMovie () {}
DownloadableMovie.prototype = new Movie;
DownloadableMovie.prototype.constructor = DownloadableMovie; 
DownloadableMovie.prototype.download = function () {
    console.log("download movie!!"+this.get('title'));
}


var terminator = new Movie ("Terminator", 1987, 1209, movieObserver);
var alien = new Movie ("Alien", 1986, 1402, movieObserver);
var advg = new Movie ("Advengers", 2013, 1309, movieObserver);
var inception = new Movie ("Inception", 2010, 2209, movieObserver);
var down = new DownloadableMovie ();
var bruce = new Actor("Bruce Willis", 60, "USA");
var rider = new Actor("Winona Rider", 39, "USA");
var actors = [];
terminator.play();   
inception.play()
alien.stop();
advg.set('year', 1999);
alien.share("miAmigo");
down.set('title', "test");
down.download();
myMovie.set('title', "myMovie");
myMovie.play();
actors.push(bruce);
actors.push(rider);
inception.actors = actors;
