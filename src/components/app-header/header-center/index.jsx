import React, { memo, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import SearchTitles from "@/assets/data/search_titles"
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
const HeaderCenter = memo((props) => {
  const titles = SearchTitles?.map(item => item.title)
  const { searchBarClick } = props
  // console.log(SearchTitles.title)
  const [tabIndex, setTabIndex] = useState()
  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()
  }
  console.log(searchBarClickHandle)
  return (
    <HeaderCenterWrapper>
      {/* <div className='search-bar'>
        <div className='text'>搜索房源</div>
        <IconSearch />
      </div> */}
      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex} />
      </div>
      <div className="infos">
        <SearchSections searchInfos={SearchTitles[tabIndex]?.searchInfos} />
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter