import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconAvatar from '@/assets/css/svg/icon_avatar'
import IconGobal from '@/assets/css/svg/icon_gobal'
import IconMore from '@/assets/css/svg/icon_more'

const HeaderRight = memo(() => {
  const [ showPanel, setShowPanel ] = useState(false)

  useEffect(()=> {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click",windowHandleClick, true)
    return () => {
      window.removeEventListener("click",windowHandleClick,true)
    }
  },[])

  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <HeaderRightWrapper>
      <div className='right'>
        <div className='btns'>
          <span className='item login'>登录</span>
          <span className='item register'>注册</span>
          <IconGobal />
        </div>
        <div className='profile' onClick={profileClickHandle}>
         <IconMore />
         <IconAvatar />
       
        { showPanel && (
          <div className='panel'>
          <div className='top'>
            <div className='item'>注册</div>
            <div className='item'>登陆</div>
          </div>
          <div className='bottom'>
            <div className='item'>出租房源</div>
            <div className='item'>开展体验</div>
            <div className='item'>帮助</div>
          </div>
        </div> 
        )
      }
        </div>
      </div>
      
    </HeaderRightWrapper>
  )
})

export default HeaderRight