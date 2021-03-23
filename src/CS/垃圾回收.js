// (对象) （：引用计数
// 缺点 循环引用 a b 互相引用 但是并没有在其他地方使用 容易引起内存泄漏

// 可达性 (：标记清楚
// 从跟不触发能触及的对象
// 之后还存在标记的话就会被回收

// 常见的内存泄露
// 1. global
// 解决 window.a = x | window.a = null;
// 2. 定时器 setTimeout
// clearTimeout

// 3. 闭包 一个内部函数有机会访问到外部环境的变量
// 内存泄露 合理引用

// 4. dom的引用
// const element = {
//   img:''
// };
// Element.img = null

// 占用的多少字节 buffer

// 在JS中 每种类型的内存大小都是不同的
const testData = {
  a: 111,
  b: 'ccc',
  222: false,
};

// number: 8字节
// boolean: 4字节
// string: 2字节

// 对于计算机内存基础 对于递归

// 缓存

const seen = new WeakSet();

function calculator(object) {
  var toStr = Object.prototype.toString;
}
