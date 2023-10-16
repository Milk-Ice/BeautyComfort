import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }),shallowEqual)
  const { isFixed } = headerConfig
  console.log(isFixed)

  return (
    <HeaderWrapper className={classNames({fixed: isFixed})}>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader