import React, { memo, useEffect} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from '@/components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeAction } from '@/store/modules/home'
import SectionHeader from '@/components/selection-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  // 取数据
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
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
         <div className='good-price'>
         <SectionHeader title={goodPriceInfo.title} />
         <SectionRooms roomList={goodPriceInfo.list} />
        </div>
        </div>
    </HomeWrapper>
  )
})

export default Home