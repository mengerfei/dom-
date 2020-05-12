// 创建 即 增

// 创建一个标签节点
let div1 = document.createElement("div");

// 创建一个文本节点
let text1 = document.createTextNode("你好");

// 标签里面插入文本
div1.appendChild(text1);
// div1.innerText = '你好' 或者 div1.textContent = '你好'
// 但是不能用div1.appendChild("你好");

// 插入页面中
//     0.1 你创建的标签默认处于JS线程中
//     0.2 你必须把它插到head或者body里面,它才会生效
//     0.3document.body.appendChild(div)
//     或者
//     0.4已在页面中的元素.appendChild(div)

// appendChild
// 页面中有div#test1 和  div#test2
let div = document.createElement("div");
test1.appendChild(div);
test2.appendChild(div);

// 问题：请问最终 div 会出现在哪里？
// A.test1里面  B.test2里面 C.test1里面 和 test2里面

// 答案：  test2里面
// 原因：  一个元素不能出现在两个地方，除非复制一份

// 删除

// 旧方法： parentNode.childChild(childNode)
// 新方法： childNode.remove()

// 改属性即 改
//   写标准属性
// 改class: div.className = 'red bule' (全覆盖)
// 改class: div.classList.add('red')

// 改style: div.style = 'width:100px;color:blue;'
// 改style的一部分: div.style.width = '200px'
// 大小写: div.style.backgroundColor = 'while'

// 改data-* 属性: div.dataset.x = 'famiy'

// 读标准属性

// div.classList / addEventListener.href
// div.getAttribute('class') / addEventListener.getAttribute('href')
// 两种方法都可以，但值可能稍微有些不同

// 查

// 查爸爸
// node.parentNode 或者 node.parentElement

// 查爷爷
// node.parentNode.parentNode

// 查子代
// node.childNodes 或者 node.children

// 查兄弟
// node.parentNode.childNodes 还要排除自己
// node.parentNode.children  还要排除自己

// 查看老大
// node.firstChild

// 查看老幺
// node.lastChild

// 查看上一个哥哥/姐姐
// node.previousSibling

// 查看下一个弟弟/妹妹
// node.nextSibling

// 遍历一个div 里面的所有元素

travel = (node, fn) => {
  fn(node);
  if (node.children) {
    for (let i = 0; i < node.length; i++) {
      travel(node.children[i], fn);
    }
  }
};

travel(div1, (node) => console.log(node));
