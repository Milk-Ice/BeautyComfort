import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@material-ui/core'
const RoomItem = memo((props) => {
  const { itemData } = props
  console.log(itemData)
  return (
    <ItemWrapper>
      <div className='room-item'>
        {/* 封面 */}
        <div className='cover'>
          <img src={itemData.picture_url} alt=''></img>
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