import React, { memo } from 'react'
import { HeaderRightWrapper } from './style'
import IconAvatar from '@/assets/css/svg/icon_avatar'
import IconGobal from '@/assets/css/svg/icon_gobal'
import IconMore from '@/assets/css/svg/icon_more'

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <div className='right'>
        <div className='btns'>
          <span className='item login'>登录</span>
          <span className='item register'>注册</span>
          <IconGobal />
        </div>
        <div className='profile'>
         <IconMore />
         <IconAvatar />
        </div>
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight