import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@material-ui/core'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/css/svg/icon_ArrowLeft'
import IconArrowRight from '@/assets/css/svg/icon_ArrowRight'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
const RoomItem = memo((props) => {
  const { itemData, itemwidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  // console.log(itemData)
  const silderRef = useRef()
  // 点击下一个切换轮播图
  function controlClickHandle(isRight = true, event) {
    // console.log(123)
    isRight ? silderRef.current.next() : silderRef.current.prev()

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 1
    setSelectIndex(newIndex)

    event.stopPropagation()
  }
  // 点击跳转到详情页
  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }
  // 普通展示图片元素
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  // 轮播图元素
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" fill="#fff" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" fill="#fff" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames('dot', {
                    active: selectIndex === index
                  })}
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={silderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
  return (
    <ItemWrapper itemwidth={itemwidth} onClick={itemClickHandle}>
      <div className="inner">
        {/* 根据是否有轮播图数组列表展示 */}
        {!itemData.picture_urls ? pictureElement : sliderElement}
        {/* 描述 */}
        <div className="desc">{itemData.verify_info.message?.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥ {itemData.price}/晚</div>
        {/* 评分 */}
        <Rating
          name="read-only"
          value={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: '12px', color: 'orange' }}
        />
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemwidth: PropTypes.string,
  itemClick: PropTypes.func
}

export default RoomItem
