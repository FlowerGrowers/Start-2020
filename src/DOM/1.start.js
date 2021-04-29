// html 中的 换行 和 空格 属于文本节点
// 除了 因为历史原因 head 标签前的, </body> 标签后的 因为 HTML 规范要求所有内容必须包含在body标签中
// 浏览器的修正功能: 如果浏览前遇到不正确的html 标签 会在生成dom树 的时候自动修正
// 你在文本中不写 <body></body> <html></html> 浏览器在生成Dom树时 --
// -- 也会自动生成 有一个有趣的标签 可以记录一下 -- table 规范中规定表格必须有tbody

// 实际一共有12中节点类型 但是常用的就四种
/*
  1. document 称做 Dom 入口
  2. 元素节点
  3. 文本节点
  4. 注释 在试图中不会显示 但是可以用JavaScript获取的到
*/

// 遍历 document 对 dom 的操作都是从document开始的 节点可以看做 document对象的属性
// html -> document.documentElement
// body -> document.body (note: body可能为 null
// head -> document.head

// 考点 脚本是无法访问到还没运行到的几点
// 在 DOM 中 null 表示节点不存在
/*
  <head>
    <script>
      const body = document.body;
      // body == null
    </script>
  </head>
  <body></body>
*/

// 子节点 表示节点的直系元素 如 <body></body> 就是 <html></html> 的子节点
// 子孙元素 后代元素节点 childNodes 可以获取到节点的子孙元素 包括到了文本节点
// firstChild = ele.childNodes[0]; lastChild = ele.childNodes[ele.childNodes.length - 1];
// 用 ele.hasChildNodes() 检查节点是否 有子节点

/*
  Note: childNodes 获得是一个集合 可以用JavaScript中的 for...of 迭代
  DOM集合的属性事只读的 无法用 childNodes[i] = xxx 去替换节点
*/

// 兄弟节点 siblings nextSiblings previousSiblings
// 父节点 parentNode

// 纯净导航 但是一般的需求中 我们并不需要展示所有的节点 大多只期望展示元素节点
// children parentElement firstElementChild lastElementChild nextElementSiblings previousElementSibling

// 搜索DOM
// document.querySelectorAll(css)
// document.querySelector(css)
// ele.matches(css) 匹配 符合css要求的所有属性
// 考点 使用document.getElementByXXX 获得结合是动态的 实时的反应 文档的状态 document.querySelect则是静态的 只要使用过一次 再次使用也还是原值

// 节点属性
/**
 * document.body.__proto__.constructor.name
 * "HTMLBodyElement"
 * document.body.__proto__.__proto__.constructor.name
 * "HTMLElement"
 * document.body.__proto__.__proto__.__proto__.constructor.name
 * "Element"
 * document.body.__proto__.__proto__.__proto__.__proto__.constructor.name
 * "Node"
 * document.body.__proto__.__proto__.__proto__.__proto__.__proto__.constructor.name
 * "EventTarget" 是一个抽象类 支持所有的Dom结构都支持
 * document.body.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor.name
 * "Object"
 */

// tagName / nodeName
/*
  对于元素节点 这两个属性是没有区别的 
  注意 标签名称 始终是大写的 除非是在XML模式下 BODY 而非 body/<Body>
*/

// outerHTML 操作还是比较奇怪的 在脚本中现实的还是原来的值 只是在DOM显示中已经替换了
// 原来的节点从文档中删除 新的片段被插到了原来的位置上替代了
// innerHTML仅对元素节点产生印象 那我们想要 知道文本节点的内容呢 那就要用到nodeValue、data
// textContent 纯文本写入

// 特性和属性 attributes properties
// 对于元素节点 再浏览器加载页面是时 他会读取 HTML 并生成 DOM 对象 对于元素节点 大多数的标准的HTML特性 会自动变成DOM的属性
// <body id="page"> => body.id = "page"
// HTML中的名字是大小写不敏感的
// 他们的值总是字符串类型的
