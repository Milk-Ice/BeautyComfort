import React, { memo, useEffect} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from '@/components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/index'
import SectionHeader from '@/components/selection-header'
import SectionRooms from '@/components/section-rooms'
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
          {/* 折扣 */}
          <div className='discount'>
            <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
            <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.33%" />
          </div>
         <HomeSectionV1 infoData={goodPriceInfo} />
         <HomeSectionV1 infoData={highScoreInfo} />
        </div>
    </HomeWrapper>
  )
})

export default Home