import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=> {
          document.body.style.overflow = "auto"
        }
    }, [])
  return (
    <BrowserWrapper>

    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser