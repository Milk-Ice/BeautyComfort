import React, { memo } from 'react'
import { HeaderCenterWrapper } from './style'
import IconSearch from '@/assets/css/svg/icon_search'

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className='search-bar'>
        <div className='text'>搜索房源</div>
        <IconSearch />
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter