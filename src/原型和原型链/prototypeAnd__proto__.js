// 简单的说 原型就是prototype __proto__原型链

// 在JS运行的时候就已经存在了
console.log(Function.__proto__ === Function.prototype);

//  in hasOwnProperty in关键词回去原型链一直找 但是hasOwnProperty()只会自己的属性上找
