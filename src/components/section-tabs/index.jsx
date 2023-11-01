import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classnames from 'classnames'
import ScrollView from '@/base-ui/scroll-view/index'
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  tabNames.push('abc')
  tabNames.push('ancc')

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classnames('item', { active: index === currentIndex })}
              onClick={() => itemClickHandle(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs
