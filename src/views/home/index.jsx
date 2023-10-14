import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1/index'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils/is_empty_object'
import HomelongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
const Home = memo(() => {
  // 取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longforInfo, plusInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
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
         {isEmptyObject(discountInfo) &&  <HomeSectionV2 infoData={ discountInfo } />}
         {isEmptyObject(hotRecommendInfo) &&  <HomeSectionV2 infoData={ hotRecommendInfo } />}

          {isEmptyObject(longforInfo) && <HomelongFor infoData={ longforInfo } />}

         {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={ goodPriceInfo } />}
         {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={ highScoreInfo } />}

         {/* plus */}
         {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
        </div>
    </HomeWrapper>
  )
})

export default Home