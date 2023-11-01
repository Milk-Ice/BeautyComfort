import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import { useDispatch } from 'react-redux'
import DetaiInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Details = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetaiInfos />
    </DetailWrapper>
  )
})

export default Details
