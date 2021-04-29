// 通过HTML特性 attribute on<event>

// 通过Dom属性 property on<event>

/**
 * 1. 不要使用setAttribute 因为value 为string
 * 2. HTML的特性是不区分大小写的,Dom属性是区分大小写的 但是尽量都用小写 onclick
 * 3. 如果想给一个ele的时间分配多个函数 一般是的方法是做不到的 需要用到addEventListener()
 * **/

document.onclick = function() {
  // xxxx
};

document.onclick = function() {
  // 会覆盖掉之前的action
};

document.addEventListener('click', handler1);
document.addEventListener('click', handler2);

// =========

// 事件对象
/**
 * 1. 当事件发生时 浏览器会创建一个event对象
 * 2. event.type 事件类型 比如 "click"
 * 3. event.currentTarget 处理时间的元素 这里与this相同 除了使用箭头函数 或者显示的改变了this
 * 我们 可以从currentTarget上获取元素
 * 4. event.clientX event.clientY 指事件中的指针相对窗口坐标
 * 5. event 在HTML中当然也可以取到 onclick="alert(event.type)" => function(event){alert(event.type)}
 * **/
