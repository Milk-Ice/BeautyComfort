import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconPictureClose from '@/assets/css/svg/icon_pictureClose'
import IconArrowLeft from '@/assets/css/svg/icon_ArrowLeft'
import IconArrowRight from '@/assets/css/svg/icon_ArrowRight'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  // 点击关闭
  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }
  // 点击下一个、上一个切换照片
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0

    setCurrentIndex(newIndex)
  }
  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconPictureClose fill="#fff" />
        </div>
      </div>
      <div className="silder">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}><IconArrowLeft width="88" height="88" /></div>
          <div className="btn right" onClick={e => controlClickHandle(false)} ><IconArrowRight width="88" height="88" /></div>
        </div>
        <div className="picture">
        <img src={pictureUrls[currentIndex]} alt='' />
      </div>
      </div>
      
      <div className="preview">

      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser