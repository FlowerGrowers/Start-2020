new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: 'test1' });
    reject({ data: 'test2' });
    resolve({ data: 'test3' });
  }, 2000);
})
  .then(
    (value) => {
      console.log('value', value);
      // return Promise.reject(2);
      throw new Error('2');
    },
    (reason) => {
      console.log('reason', reason);
    }
  )
  .then(
    (value) => {
      console.log('value', value);
    },
    (reason) => {
      console.log('reason', reason);
    }
  )
  .finally(() => {
    console.log('finish');
  });

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 500);
});

var promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 5000);
});

(async function() {
  await Promise.all([promise1, promise2, promise3]);
})();

promise1.then((value) => console.log(value));
promise2.then((value) => console.log(value));
promise3.then((value) => console.log(value));
