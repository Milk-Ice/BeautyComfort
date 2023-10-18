import React, { memo, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import SearchTitles from "@/assets/data/search_titles"
import SearchTabs from './c-cpns/search-tabs'
const HeaderCenter = memo((props) => {
  const titles = SearchTitles?.map(item => item.title)
  const { isSearch, searchBarClick } = props
  // console.log(SearchTitles.title)
  const [tabIndex, setTabIndex] = useState()
  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()

  }
  return (
    <HeaderCenterWrapper>
      {/* <div className='search-bar'>
        <div className='text'>搜索房源</div>
        <IconSearch />
      </div> */}
      <div className="search-details">
        <SearchTabs titles={titles} tabClick={searchBarClickHandle} />
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter