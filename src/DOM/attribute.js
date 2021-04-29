// 在JavaScript中有诸多的属性可以获得有关高度 宽度或者其他几何特征。
// offsetWidth/offsetHeight 是不包括margin的 但是包括边框(前提是box-sizing:默认盒模型)
// clientTop/clientLeft 是指元素的边框宽度 一般（除了操作系统为阿拉伯语言或者西伯利亚语言）

// 陷阱！ 如果 img 没有设置 width 和 height 属性 JavaScript 在首次加载无法获得 offsetWidth 或者说是为 null/0 直到后来浏览器中有了缓存之后

// getComputedStyle(ele).width 与 clientWidth的区别
/**
 * 1. clientWidth 返回的是一个数值 而getComputedStyle(ele).width返回的是带有 "px" 的字符串;
 * 2. getComputedStyle(ele).width 可能返回一个不是数字形式的格式 比如内联元素的 "auto";
 * 3. 在默认的box-sizing中 clientWidth 返回的值是包括padding的 儿getComputedStyle(ele).width 是不包括padding
 */

// 坐标 coordinates
/**
 * 1. 相对于文档
 *  position:absolute
 *  pageX pageY 从窗口的左部和顶部
 * 2. 相对于窗口
 *  position:fixed
 *  clientX clientY
 *
 *
 *  在页面没有滚动 或者说开始是 窗口的左上角与文档的坐标是一致的 但是当文档开始移动的时候
 *  pageY 相对于文档是不变的 但是clientY却离得窗口更加的近
 */

// getBoundingClientRect()
/**
 * 1. 由于历史原因 IE 无法通过改API 获取 x/y
 *
 */
