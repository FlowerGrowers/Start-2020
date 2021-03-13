const MyPromise = require('./MyPrmoise');

// const promise = new MyPromise((resolve, reject) => {
//   // resolve('success');
//   // reject('faile');
//   // throw new Error('Exception:Error!!!');
//   setTimeout(() => {
//     resolve("success");
//   }, 2000);
// });

// promise.then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

const promise = new MyPromise((resolve, reject) => {
  resolve('success');
});

const promise2 = promise
  .then((value) => {
    return value + ' ' + '-> then' + ' ' + 'promise2';
  })
  .then((value) => {
    console.log(value);
  });
