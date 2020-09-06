/*
 * @Author: your name
 * @Date: 2020-09-06 17:18:50
 * @LastEditTime: 2020-09-06 19:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \手写Promise\src\index.js
 */
const MyPromise = require('./MyPrmoise');

const promise = new MyPromise((resolve, reject) => {
  // resolve('success');
  // reject('faile');
  // throw new Error('Exception:Error!!!');
  setTimeout(() => {
    resolve('success')
  }, 2000)
})

promise.then((value) => {
  console.log(value);
}, (reason) => { console.log(reason) })