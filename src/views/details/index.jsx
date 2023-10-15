import React, { memo } from 'react'
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import DetaiInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'

const Details = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  return (
    <DetailWrapper>
      
      <DetailPicture />
      <DetaiInfos />
     
    </DetailWrapper>
  )
})

export default Details