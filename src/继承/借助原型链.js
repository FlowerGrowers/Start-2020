function Parent() {
  this.name = ['cc', 'dd'];
}

Parent.prototype.say = function() {
  console.log('hello');
};

function Children() {
  this.type = 'ok';
}

Children.prototype = new Parent();

var ch1 = new Children();
var ch2 = new Children();

console.log(ch1.name.push('ee'), ch2.name);

// 缺点就是会影响到原型对象上的属性
