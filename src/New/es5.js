// 模拟 new 的实现
// ES5
function mockNew() {
  var Constructor = [].shift.call(arguments);
  var obj = {};
  obj.__proto__ = Constructor.prototype;
  var result = Constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function() {
  console.log(this.name);
};

// var jack = new Person('jack', 15);

// console.log(jack);
// jack.say();

var jack = mockNew(Person, 'jack', 15);

console.log(jack);
jack.say();
