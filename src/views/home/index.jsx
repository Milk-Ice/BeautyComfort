import React, { memo, useEffect} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from '@/components/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeAction } from '@/store/modules/home'
import SectionHeader from '@/components/selection-header'
import RoomItem from '@/components/room-items'

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
          <ul className='room-list'>
            {
              goodPriceInfo.list?.slice(0,8)?.map(item => {
                return <RoomItem itemData={item} key={item.id} />
              })
            }
          </ul>
        </div>
        </div>
    </HomeWrapper>
  )
})

export default Home