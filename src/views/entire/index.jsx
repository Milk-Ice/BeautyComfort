import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePage from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fectchRoomListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fectchRoomListAction())
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePage />
    </EntireWrapper>
  )
})

export default Entire