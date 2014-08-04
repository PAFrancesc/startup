define('Director', function()
{ 
  function Director(names) {
    this.fields= {
      'name': names,
      'quotes' : [],
    };
    console.log("Director Created: " + this.get('name'));
  }

  Director.prototype = {
    constructor: Director,
    speak:function ()  {
      console.log(this.get('name')+" says: " + this.get('quotes'));
    },
    set:function (attr, value)  {
      this.fields[attr] = value;
      console.log ("Update: "+attr+" to : "+value);
    },
    get:function (attr) {
      return this.fields[attr];
    }
  }
  return Director;
});