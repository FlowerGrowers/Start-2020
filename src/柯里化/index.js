// func 是要转换的函数
function curried(...args) {
  if (args.length >= func.length) {
    // (1)
    return func.apply(this, args);
  } else {
    return function pass(...args2) {
      // (2)
      return curried.apply(this, args.concat(args2));
    };
  }
}
