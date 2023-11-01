import React, { memo } from 'react'
import { BannerWrapper } from './style'
import coverImg from '@/assets/img/banner.png'
const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      <img className="cover" src={coverImg} alt="" />
    </BannerWrapper>
  )
})

export default HomeBanner
