// import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-items'
import { useNavigate } from 'react-router-dom'
import { changeDetailAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  /** 从redux中获取roomList数据 */
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  /** 事件处理 */
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemClickHandle = useCallback(
    (item) => {
      // dispatch(changeDetailInfoAction(item))
      dispatch(changeDetailAction(item))
      navigate('/detail')
      // console.log(item)
    },
    [navigate, dispatch]
  )

  return (
    <RoomsWrapper>
      <h2 className="title">美宜居为您提供{totalCount}多处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={itemClickHandle}
            />
          )
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms
