import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomeWrapperV2 } from './style'
import SectionHeader from '@/components/selection-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV2 = memo((props) => {
    const { infoData } = props
    const [name, setName] = useState("佛山") 

    // tab
    const tabNames = infoData.dest_address?.map(item => item.name)
    // 点击Tab切换城市数据
    const tabClickHanle = useCallback(function(index, name) {
      setName(name)
    },[])
    
  
  return (
   <HomeWrapperV2>
    <div className='discount'>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClickHanle}/>
            <SectionRooms roomList={infoData.dest_list?.[name]} itemwidth="33.33%" />
          </div>
   </HomeWrapperV2>
  )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2