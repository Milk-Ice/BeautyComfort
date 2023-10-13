# Getting Started with Create React App

以下是关于计算滚动视图的思路：

● 记录索引: posIndex
● newIndex = posIndex + 1
● 根据newIndex索引获取到子元素 children[newIndex]
● newEl.offsetLeft 
  ○ 注意事项: 设置定位
● 修改scrollContentRef.current.style.transform = translate(xx)
● 设置最新的索引
● 判断右边按钮是否显示
● 判断左边按钮是否显示

1. **初始化状态和引用**：首先，使用`useState`来初始化状态变量，以便在组件中管理一些状态。使用`useRef`来创建引用，以便访问DOM元素。

2. **右侧按钮点击事件处理**：当点击右侧按钮时，内容向右滚动。需要计算新的偏移量(`newOffsetLeft`)，这是下一个要滚动到的内容块的`offsetLeft`属性。然后，使用CSS `transform`属性将内容向左平移，以实现滚动效果。最后，我们更新当前位置索引(`posIndex`)和右侧按钮的显示状态(`showRight`)。

3. **计算总滚动距离**：在`useEffect`中，计算了整个可滚动的宽度(`scrollWidth`)以及容器自身的宽度(`clientWidth`)。通过将这两个值相减，得到了总的可滚动距离(`totalDistance`)。然后，将这个值存储在引用(`totalDistanceRef`)中。

4. **右侧按钮的显示状态**：在`useEffect`中，还根据总滚动距离(`totalDistance`)来设置右侧按钮的显示状态(`showRight`)。如果总滚动距离大于0，说明内容可以向右滚动，因此右侧按钮应该显示。

5. **渲染组件**：最后，渲染滚动视图组件，包括左侧按钮、右侧按钮（如果`showRight`为`true`），以及包含内容的滚动容器。这个容器使用`ref`属性来引用，并在其中渲染`props.children`，这样传递给组件的任何子元素都会显示在滚动容器中。


