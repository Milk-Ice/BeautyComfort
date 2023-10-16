import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconPictureClose from '@/assets/css/svg/icon_pictureClose'
import IconArrowLeft from '@/assets/css/svg/icon_ArrowLeft'
import IconArrowRight from '@/assets/css/svg/icon_ArrowRight'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconArrowDown from '@/assets/css/svg/icon_ArrowDown'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
import IconArrowUp from '@/assets/css/svg/icon_ArrowUp'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)
  
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  function bottomItemClickHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }
  // 点击关闭
  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }
// console.log(currentIndex)
  // 点击下一个、上一个切换照片
  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0

    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }
  // console.log(currentIndex, isNext)
  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
    <div className='top'>
      <div className='close-btn' onClick={closeBtnClickHandle}>
        <IconPictureClose/>
      </div>
    </div>
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft width="77" height="77"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight width="77" height="77"/>
        </div>
      </div>
      <div className='picture'>
        <SwitchTransition mode='in-out'>
          <CSSTransition
            key={pictureUrls[currentIndex]}
            classNames="pic"
            timeout={200}
          >
            <img src={pictureUrls[currentIndex]} alt="" />
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
    <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex+1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex+1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{showList ? "隐藏": "显示"}照片列表</span>
              { showList? <IconArrowDown/>: <IconArrowUp/> }
            </div>
          </div>
          <div className='list'>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      className={classNames("item", { active: currentIndex === index })}
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
  </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
  isNext: PropTypes.bool, // 添加 isNext 到 propTypes
}

export default PictureBrowser