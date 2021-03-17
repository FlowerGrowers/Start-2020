// 实现add(1)(2)(3) => add(1,2,3);
function curriedAdd(a) {
  return function(b) {
    b += a;
    return function(c) {
      return (c += b);
    };
  };
}

const result = curriedAdd(100)(200)(3);

console.log(result);
