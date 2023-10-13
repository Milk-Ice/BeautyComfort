import React, { memo, useCallback, useEffect, useState} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from '@/components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/index'
import SectionHeader from '@/components/selection-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
const Home = memo(() => {
  // 取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
  }),shallowEqual)
  const [name, setName] = useState("佛山") 

  // tab
  const tabNames = discountInfo.dest_address?.map(item => item.name)
  // 点击Tab切换城市数据
  const tabClickHanle = useCallback(function(index, name) {
    setName(name)
  },[])
  

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
            <SectionTabs tabNames={tabNames} tabClick={tabClickHanle}/>
            <SectionRooms roomList={discountInfo.dest_list?.[name]} itemwidth="33.33%" />
          </div>
         <HomeSectionV1 infoData={goodPriceInfo} />
         <HomeSectionV1 infoData={highScoreInfo} />
        </div>
    </HomeWrapper>
  )
})

export default Home