import React, { memo, useEffect} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from '@/components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/index'
const Home = memo(() => {
  // 取数据
  const { goodPriceInfo, highScoreInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }),shallowEqual)

  // 派发异步事件
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
        <div className='content'>
         <HomeSectionV1 infoData={goodPriceInfo} />
         <HomeSectionV1 infoData={highScoreInfo} />
        </div>
    </HomeWrapper>
  )
})

export default Home