import React, { memo } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePage from './c-cpns/entire-pagination'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePage />
    </EntireWrapper>
  )
})

export default Entire