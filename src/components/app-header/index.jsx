import React, { memo, useState } from 'react'
import { HeaderWrapper, SearchAreaArapper } from './style'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

const AppHeader = memo(() => {
  const [isSearch] = useState(true)
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )
  const { isFixed } = headerConfig
  console.log(isFixed)

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} />
          <HeaderRight />
        </div>
        <SearchAreaArapper isSearch={isSearch} />
        <div className="search-area"></div>
      </div>
      <div className="cover"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
