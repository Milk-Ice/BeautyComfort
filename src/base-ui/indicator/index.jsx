import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex } = props
  return (
    <IndicatorWrapper>
        <div className="i-content">
            {
                props.children
            }
        </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator