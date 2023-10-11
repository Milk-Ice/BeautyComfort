import React, { memo } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from '@/components/home-banner'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner>
        
      </HomeBanner>
    </HomeWrapper>
  )
})

export default Home