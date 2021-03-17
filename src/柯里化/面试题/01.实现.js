// 实现add(1)(2)(3) => add(1,2,3);
// function curriedAdd(a) {
//   return function(b) {
//     b += a;
//     return function(c) {
//       return (c += b);
//     };
//   };
// }

// 实现add(1,2,3) => add(1,2)(3) =>  add(1)(2)(3)
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        // 本质上就是拼接参数
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// const result = curriedAdd(100)(200)(3);

function add(x, y, z) {
  return x + y + z;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
