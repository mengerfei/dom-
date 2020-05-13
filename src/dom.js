window.dom = {
  // 创建节点
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim(); // trim 作用：把字符串两边的空格去掉
    return container.content.firstChild; // return container.children[0];
  },
  // 新增弟弟元素 即 在当前节点后面插入 新的节点
  after(node, node2) {
    //原理：找到当前节点的父亲，然后调用父亲的insertBefore方法，接着将node2 插到 node的下一个节点的前面

    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  // 新增哥哥元素 即 在当前节点前面插入 新的节点
  before(node, node2) {
    //原理：找到当前节点的父亲，然后调用父亲的insertBefore方法，接着将node2 插到 node节点的前面
    node.parentNode.insertBefore(node2, node);
  },
  // 新增儿子元素 即 给当前节点 增加 子节点
  append(parent, node) {
    parent.appendChild(node);
    // Node.appendChild() 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）
  },
  // 新增爸爸元素 即 给当前节点 增加 父节点
  wrap(node, parent) {
    //第一步： 将 parent 放到 node 前面
    dom.before(node, parent);
    //第二步： 将 parent 移除-----> 将node 放到 parent 里面
    dom.append(parent, node);
  },
  // 删除节点
  remove(node) {
    node, parentNode.removeChild(node);
    return node;
  },
  // 删除所有子节点
  empty(node) {
    // node.innerHTML = ''
    const { childNodes } = node; //const { childNodes } = node.childNodes;
    // for (let i = 0; i < childNodes.length; i++) {
    //   dom.remove(childNodes[i]);
    //   array.push(childNodes[i]);
    // }
    // return array;

    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },
  // 修改元素或查找title
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else {
      return node.getAttribute(name);
    }
  },
  //读写文本
  text(node, string) {
    // 适配
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string; // ie
      } else {
        node.textContent = string; //firefox / chrome
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  // 读写HTML内容
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else {
      return node.innerHTML;
    }
  },
  // 修改style
  style(node, name, value) {
    if (arguments.length >= 3) {
      //dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //dom.style(div,'color')
        return node.style[name];
      }
    } else if (name instanceof object) {
      for (let key in name) {
        // key: border / color

        // node.style.border = ...

        node.style[key] = name[key];
      }
    }
  },
  // 修改class属性
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  // 添加事件
  on(
    node, //  节点
    eventName, // 事件名
    fn // 事件函数
  ) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  // 查找节点
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  //查找父节点
  parent(node) {
    return node.parentNode;
  },
  //查找子节点
  children(node) {
    return node.children;
  },
  //查找兄弟节点
  siblings(node) {
    Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  //查找下一节点
  next(node) {
    let x = node.nextSibling;
    while (x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  //查找上一个节点
  previous(node) {
    let x = node.previousSibling;
    while (x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  //遍历节点
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  //
  //查看节点当前排名
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
