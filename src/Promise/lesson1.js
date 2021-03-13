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
