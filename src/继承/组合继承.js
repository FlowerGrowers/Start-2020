function Parent(name) {
  this.name = name;
  this.arr = ['aa', 'cc'];
}

Parent.prototype.say = function() {
  console.log('hello');
};

function Children(name) {
  Parent.call(this, name);
  this.type = 'ok';
}

Children.prototype = new Parent();

var ch1 = new Children('cc');
var ch2 = new Children('dd');

console.log(ch1.name, ch2.name);
console.log(ch1.arr.push('cc'), ch1.arr, ch2.arr);

// 缺点就是会影响到原型对象上的属性
