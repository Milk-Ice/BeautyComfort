import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(() => {
  const [selectItem, setSelectItem] = useState([])

  // 处理筛选项的点击事件
  function itemClickHandle(item) {
    const newItem = [...selectItem]
    if (newItem.includes(item)) {
      const itemIndex = newItem.findIndex((filterItem) => filterItem === item) // 找到被点击项在数组中的索引
      newItem.splice(itemIndex, 1) // 从新数组中移除被点击的项
    } else {
      newItem.push(item) // 否则，将被点击的项添加到新数组中
    }
    setSelectItem(newItem) // 更新 selectItem 的状态为新数组
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames('item', {
                active: selectItem.includes(item)
              })}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
