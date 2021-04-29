// mdn 内置对象的静态属性
// attribute property
// 词根 词性 property
// Object 静态方法
// 全等
// 语法参数 Object.defineProperty(object,property,descriptor)
// 声明对象的方法之一
// 对属性更加精确的添加或修改属性
// for in / Object.keys
// 默认添加的属性默认是不可以修改的
// 数据描述符 存取描述符 两者其中之一 configurable(false) enumerable(false)
// for of / for in (无序 / 有序)
// writable false 是否可以重写 可写可改可删除可以枚举

// get set 默认值为undefined

type GetName = {
  (first_name: 'jack', last_name: ' mike'): 'jack mike';
  (first_name: string, last_name: string): string;
  (first_name: unknown, last_name: unknown): unknown;
};

const getName: GetName = function(first_name, last_name) {
  return first_name + last_name;
};
