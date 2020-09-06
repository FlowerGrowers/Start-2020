/*
 * @Author: jack
 * @Date: 2020-09-06 17:18:23
 * @LastEditTime: 2020-09-06 23:48:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \手写Promise\src\MyPrmoise.js
 */

const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED";

const reslovePromise = (promise2, x, resolve, reject) => {
  console.log(x);
};

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    // 需要两个容器存放异步执行的函数

    this.onFulfilledCallBacks = [];
    this.onRejectedCallBacks = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;

        // 发布
        this.onFulfilledCallBacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;

        this.onRejectedCallBacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {
      // 不论是在onFulfilled中还是在onRejected中 抛出异常时总是 reject(error)
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            reslovePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            reslovePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }

      // 发布订阅的模式
      if (this.status === PENDING) {
        this.onFulfilledCallBacks.push(() => {
          try {
            let x = onFulfilled(this.value);
            reslovePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallBacks.push(() => {
          try {
            let x = onRejected(this.reason);
            reslovePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
    return promise2;
  }
}

module.exports = MyPromise;
