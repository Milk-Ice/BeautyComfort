import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/css/svg/icon_moreArrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const { name } = props
    let showMessage = "显示全部"
    if(name) {
        showMessage = `显示更多 ${name}房源`
    }
    const navigate = useNavigate()
    function moreClickHanle() {
        navigate("/entire")
    }
  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
        <div className='info' onClick={moreClickHanle}>
            <span className='text'>{showMessage}</span>
            <IconMoreArrow />
        </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter