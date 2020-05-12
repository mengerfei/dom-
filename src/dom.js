window.dom = {
  // 创建节点
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  // 新增弟弟元素
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  // 新增哥哥元素
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  // 新增儿子元素
  append(parent, node) {
    parent.appendChild(node);
  },
  // 新增爸爸元素
  wrap(node, parent) {
    dom.before(node, parent);
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
  attract(node, name, value) {
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
  fin(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
};
