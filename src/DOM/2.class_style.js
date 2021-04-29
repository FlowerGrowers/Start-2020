/*
  相比较于样式写入style属性 我们应该首选通过CSS类来添加样式 仅当类无法处理的时候 才应该选择 style属性
  比如我们动态的计算元素的坐标 并且希望JavaScript来设置他们 那么使用style是可以接受的 
  一般是通过className 和 classList 
  elem.classList是一个特殊的对象 
  它具有 add remove toggle contains
  还有classList 是可以被迭代的
  for clazz of classList
*/
