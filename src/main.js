// document.createElement('div')
// 创建一个div元素
// const div = dom.create("div");

// 创建<div><span>1</span></div>
const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);
