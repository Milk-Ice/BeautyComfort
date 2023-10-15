import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@material-ui/core'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/css/svg/icon_ArrowLeft'
import IconArrowRight from '@/assets/css/svg/icon_ArrowRight'
const RoomItem = memo((props) => {
  const { itemData, itemwidth = "25%" } = props
  // console.log(itemData)
  const silderRef = useRef()
  function controlClickHandle(isRight = true){
    // console.log(123)
    isRight? silderRef.current.next(): silderRef.current.prev()
  }
  return (
    <ItemWrapper itemwidth={itemwidth}>
      <div className='inner'>
        {/* 封面点击 上一个，下一个 */}
        <div className='slider'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="30" height="30" fill="#fff" />
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="30" height="30" fill="#fff" />
            </div>
          </div>

          {/* 封面 */}
          <Carousel dots={false} ref={silderRef}>
            {
              itemData.picture_urls.map(item => {
                return (
                  <div className='cover' key={item}>
                    <img src={item} alt='' />
                  </div>
                )
              })
            }
          </Carousel>
          </div>
          {/* 描述 */}
          <div className='desc'>{itemData.verify_info.message?.join(' · ')}</div>
          <div className='name'>{itemData.name}</div>
          <div className='price'>￥ {itemData.price}/晚</div>
          {/* 评分 */}
          <Rating name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: 'orange' }} />
       
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem