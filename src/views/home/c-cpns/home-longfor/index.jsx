import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/selection-header'
import LongForItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomelongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomelongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomelongFor
