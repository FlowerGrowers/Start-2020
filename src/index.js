const MyPromise = require('./MyPrmoise');

const promise = new MyPromise((resolve, reject) => {
  // resolve('success');
  // reject('faile');
  throw new Error('Exception:Error!!!');
})

promise.then((value) => {
  console.log(value);
}, (reason) => { console.log(reason) })