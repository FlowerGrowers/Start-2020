// 模拟 new 运算
function mockNew(...args) {
  const Constructor = args.shift();
  const obj = {};

  Reflect.setPrototypeOf(obj, Constructor.prototype);

  const result = Constructor.apply(obj, args);

  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jack = mockNew(Person, 'jack', 12);
console.log(jack);
