const Promise = require('promise');

var promise1 = new Promise((resolve, reject) => {
  return setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve(1);
    } else {
      reject(2);
    }
  }, 1000);
});

// promise1.then().then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

promise1
  .then((value) => {
    return { value };
    // return value;
  })
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason, 'reason');
    }
  );
