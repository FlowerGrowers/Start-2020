/*
 * @Author: jack
 * @Date: 2020-09-06 17:18:23
 * @LastEditTime: 2020-09-06 19:45:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \手写Promise\src\MyPrmoise.js
 */

const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED";

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
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    // 发布订阅的模式
    if (this.status === PENDING) {
      this.onFulfilledCallBacks.push(() => {
        onFulfilled(this.value);
      });

      this.onRejectedCallBacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

module.exports = MyPromise;
