import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1/index'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObject } from '@/utils/is_empty_object'
const Home = memo(() => {
  // 取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
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
         {isEmptyObject(discountInfo) &&  <HomeSectionV2 infoData={discountInfo} />}
         {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
         {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        </div>
    </HomeWrapper>
  )
})

export default Home