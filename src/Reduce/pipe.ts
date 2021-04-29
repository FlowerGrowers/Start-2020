const double = (x: number) => x + x;
const triple = (x: number) => 3 * x;
const quadruple = (x: number) => 4 * x;

// Function composition enabling pipe functionality
type F = {
  (x: number): number;
};

const pipe = (...functions: F[]) => {
  return (input: number) => {
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, input);
  };
};

const multiply6 = pipe(
  double,
  triple
);

console.log(multiply6(6));

// 如果环境不兼容 Set 和 Array.from 或者 ...rest
