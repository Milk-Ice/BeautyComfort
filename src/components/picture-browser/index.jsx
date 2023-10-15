import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowserWrapper } from './style'
import IconPictureClose from '@/assets/css/svg/icon_pictureClose'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }
  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconPictureClose fill="#fff"/>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser