这是一份通过执行者 为执行者 完整的 可以 interoperable 的 JavaScript 关于 Promise 的标准。

promise 代表着 异步操作的最终结果
有关 promise 的主要交互在于 then 方法 该方法使用回调函数 来接收承诺的值或者 是该承诺无法实现的原因

随着历史的长河 A+ 改善了 A / 提案中的条款规范 取其精华去其糟粕。

这个规范详细说明了 then 的用法 提供了一个可操作的基础 所有符合该 promise 的实现都可以依赖此基础
所以说这凤凰规范是非常稳定的 可能会有偶尔修订规范 向后兼容 处理边界问题

、

## 术语

1.1 "promise" 是一个又有符合规范 then 方法的对象/函数;
1.2 "thenable" 是一个定义了 then 方法的对象或者函数;
1.3 "value" 表示任何合法的 JavaScript 的值 包括 undefined
1.4 "exception" 是使用 throw 语句抛出一次异常的值
1.5 "reason" 是指示为什么 promise 被拒绝的值

## 补充

2.1 Promise 状态
Promise 一定是第三种状态的一种 pending fulfilled rejected

2.1.1 当 promise 处于 pending 状态
2.1.1.1 可能转变成 fulfilled 或者 rejected
2.1.2 当 promise 处于 fulfilled 状态
2.1.2.1 不能再转变成其他状态
2.1.2.2 必须有值 而且是不能改变的
2.1.3 当 promise 处于 rejected 状态
2.1.3.1 不能再转变成其他状态
2.1.3.2 必须有个结果 而且是不能转变的

注意 这里的 不能再转变 是指身份不能改变 并不代表深拷贝

2.2 then
promise 必须提供一个可以访问当前或者最后的值或者原因
promise.then 接收两个参数

> promise.then(onFulfilled,onRejected)

2.2.1 两个参数都是可选项
2.2.1.1 如果 onFulfilled 不是函数 他就会被忽视
2.2.1.2 如果 onRejected 不是函数 他就会被忽视

2.2.2 如果 onFulfilled 是函数
2.2.2.1 他肯定被调用在 promise 为 fulfilled 之后,并且 附带 promise 的值为第一个参数
2.2.2.2 他必不可能被调用在 promise 在 fulfilled 之前
2.2.2.3 他不能被调用超过一次

2.2.3 如果 onRejected 势函数
2.2.3.1 他肯定被调用 promise 为 rejected 之后,并且 附带 promise 的原因为第一个参数
2.2.3.2 他必不可能被调用在 promise 在 rejected 之前
2.2.3.3 他不能被调用超过一次

2.2.4 当代码还未到执行器中的上下文堆栈时 onFulfilled 和 onRejected 是不会被调用的 [3.1]

2.2.5 onFulfilled 和 onRejected 必须被执行作为函数 [3.2]

2.2.6 then 可以被调用多次在同一个 promise
2.2.6.1
2.2.6.2

2.2.7 then 必须返回一个 promise

> promise2 = promise1.then(onFulfilled,onRejected)

2.2.7.1 当 onFulfilled 或者 onRejected 返回一个值(x) ,继续执行  程序
2.2.7.2 如果在 onFulfilled 或者 onRejected 执行时 抛出异常 (error) promise2 为 rejected 状态 并且 reason 为 error
2.2.7.3 如果 onFulfilled 不是一个函数 并且 promise 为 fulfilled,promise2 状态为 fulfilled value 为 promise1 的值
2.2.7.4 如果 onRejected 不是一个函数 并且 promise 为 rejected，promise2 状态为 rejected reason 为 promise1 的原因

2.3 promise 执行过程
promise 执行流程 是抽象的条件 去解决 作为输入 promise 和 值 我们捐献 作为 [[Resolve]](promise,x) 如果 x 是 作为 thenable 他尝试

去执行 [[Resolve]](promise, x), 经过以下几步:
2.3.1

2.3.4 如果 x 既不是函数或者对象 fulfilled(x)

## 注意事项

3.1 这里“平台代码” 意味着引擎 环境 和 promise 实践代码, 正式代码中 要保证 onFulfilled 和 onRejected 执行是异步的 在事件循环进入后 然后被调用 它既可用 JS 中的定时器等宏观任务实现 也可以用 MutationObserver 或者 process.nextTick 等微观任务机制实现 由于 promise 的实现被认为 是平台代码 因此他本身可能就包含一个任务调度 或者 ？“蹦床” 在其中调用程序
