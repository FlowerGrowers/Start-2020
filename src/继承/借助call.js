function Parent(name) {
  this.name = name;
}

Parent.prototype.say = function() {
  console.log('object');
};

function Children() {
  Parent.call(this, 'cc');
  this.type = 'ok';
}

var ch = new Children();
// console.log(ch.say());
ch.say();
// 只能继承属性 却无法继承父类原型对象中的方法
// TypeError: ch.say is not a function
