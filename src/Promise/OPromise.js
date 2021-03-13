function Promise(fn) {
  let state = 'pending';
  let value = null;
  const callbacks = [];

  this.then = function(onFulfilled) {
    return new Promise((resolve, reject) => {
      handle({
        //桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
        onFulfilled,
        resolve,
      });
    });
  };

  function handle(callback) {
    if (state === 'pending') {
      callbacks.push(callback);
      return;
    }

    if (state === 'fulfilled') {
      if (!callback.onFulfilled) {
        callback.resolve(value);
        return;
      }
      const ret = callback.onFulfilled(value); //处理回调
      callback.resolve(ret); //处理下一个 promise 的resolve
    }
  }
  function resolve(newValue) {
    // 2. 开始处理
    const fn = () => {
      // 原则状态不可变
      if (state !== 'pending') return;

      state = 'fulfilled';
      value = newValue;
      handelCb();
    };

    // 可以思考一下为什么这样 因为。。。
    setTimeout(fn, 0); //基于 PromiseA+ 规范
  }

  function handelCb() {
    // 3.
    while (callbacks.length) {
      const fulfiledFn = callbacks.shift();
      handle(fulfiledFn);
    }
  }

  // 1. 执行器函数是同步的 会立即执行
  fn(resolve);
}

new Promise((resolve, reject) => {
  console.log(1);
  // 1.
  resolve('newValue');
});
