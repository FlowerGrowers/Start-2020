// func 是要转换的函数
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function getSomething(...args) {
  // console.log(a);
}

console.log(getSomething.length);
