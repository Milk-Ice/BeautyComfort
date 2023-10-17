# 一、项目搭建

## (一) 项目的搭建

### 1. 项目的介绍开发规范

### 2. 搭建项目的过程

#### 一、项目的创建-脚手架

#### 二、项目的基本配置

- icon图标
- 标题
- jsconfig.json

#### 三、项目目录的结构

#### 四、craco.config.js

- 项目的别名alias
- less文件的生效

#### 五、CSS样式的重置

- normalize.css
- reset.css: 自己编写

#### 六、路由的配置router

#### 七、2.2.7. 状态的管理redux

- createSlice
- 普通的方式: 四个文件

#### 八、网络请求axios封装

- HYRequest的封装
- 在home中测试使用


 

# 二、美宜居-头部布局-轮播-集成Redux-展示列表

## (一) AppHeader

### 1. 左侧的Logo

- svg引入的方式 => 封装成组件
- 项目的主题配置:

- - theme => index.js
  - ThemeProvider提供theme
  - props => props.theme.xxx

### 2. 右侧的内容

- btns的列表
- Profile

- - 两个svg

- 点击事件

- - 弹窗popover

- 混入的使用

- - theme => mixin

### 3.  中间的内容

## (二) 首页的开发

### 1. 轮播图的图片

- 引入图片的方式
- img/background-image引入

- - import
  - require()函数

### 2. 高性价比展示

#### 一、 redux请求数据和管理数据

#### 二、封装SectionHeader

- title
- subtitle

#### 三、展示列表的数据

- RoomItem

- - 基本展示
  - 集成UI组件库

- - - Material UI
    - Ant Design

- - 使用rating展示

- SectionRoom封装到组件中


 

# 三、获取展示区域数据-Tabs封装-水平滚动组件封装

## (一) 一. Tabs区域数据的展示

### 1. 获取区域的数据

### 2. 展示的两块内容

- section-header
- section-tabs(没有展示)
- 第一次展示: ["成都"]

### 3. 封装Section-Tabs

- tabNames的数组
- 监听点击: currentIndex => active
- 外界监听内部的点击

- - 外界传入的函数, 最好用useCallback包裹

```jsx
const tabClickHandle = useCallback((index, name) => {}, [])

  <section-tabs tabClick={tabClickHandle}/>
```

- 外界可以根据name, 获取对应的列表数据 [6]

### 4. 如何设置初始化的值

- name没有默认值:

- - Object.keys(dest_list)[0]
  - 问题: useState(初始化值), 只有第一次渲染组件时, 才有效果

- 解决方案二:

- - 方案一: 没有数据的情况, 不要进行第一次渲染. 

- - - 渲染一次

- - 方案二: useEffect(() => { setName() })

- - - 渲染三次

### 5. Section-Footer封装

- 根据是否传入name属性, 决定如何展示:

- - 如何展示文本
  - 如何展示样式

## (二) ScrollView的封装

### 1.  封装ScrollView的滚动方案

- props.children
- 计算scrollView要不要滚动

- - 获取scrollWIdth
  - 获取clientWidth
  - const totalDistance = scrollWidth - clientWidth
  - totalDistance > 0, 显示右边的按钮

### 2. 点击右边的按钮滚动

- 记录索引: posIndex
- newIndex = posIndex + 1
- 根据newIndex索引获取到子元素 children[newIndex]
- newEl.offsetLeft

- - 注意事项: 设置定位

- 修改scrollContentRef.current.style.transform = translate(xx)
- 设置最新的索引
- 判断右边按钮是否显示
- 判断左边按钮是否显示

### 3. 点击左边按钮和按钮的样式

- 左边按钮和右边按钮的逻辑一致
- 按钮的样式

### 4.  向往的城市数据的展示

- 获取数据
- 封装组件/item
- 展示数据
- 调整样式

### 5. plus的数据的展示

- 请求数据
- 封装section-v3
- flex-shrink: 0

### 6. 点击全部跳转entire页面


 

# 四、房间列表-分页器-轮播图-自定义分页器
