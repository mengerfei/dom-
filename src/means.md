# dom造轮子
## 创建节点：
#### 示例: 
`dom.create('tagName')`

## 新增弟弟节点：
#### 示例:
`dom.after(node,node2)`

## 新增哥哥节点：
#### 示例:
`dom.before(node,node2)`

## 新增儿子节点：
#### 示例:
`dom.append(tagParent,tagNameChild)`

## 新增爸爸节点：
#### 示例:
`dom.wrap('tagName')`

## 修改元素属性：
#### 示例:
`dom.style(tagName,{border:'1px solid red',color:'blue'})`
## 读取元素属性：
#### 示例:
`dom.style(tagName,'border')`

## 添加元素class属性：
#### 示例:
`dom.class.add(tagName,'border')`

## 事件：
#### 示例:
```javascript  
dom.on('tagName','click',() => {
    console.log('点击了')
})
```


