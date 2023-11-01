import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWraper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <HeaderWraper>
      <h2 className="title">{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </HeaderWraper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader
