function Parent(name) {
  this.name = name;
}

Parent.prototype.say = function() {
  console.log('hello');
};

function Children(name) {
  Parent.call(this, name);
  this.type = 'okapi';
}

Children.prototype = Parent.prototype;
Children.prototype.constructor = Children;

var ch4 = new Children('cc');
