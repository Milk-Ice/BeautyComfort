import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '../room-items'
const SectionRooms = memo((props) => {
    const { roomList = [], itemwidth } = props
    // console.log(roomList)
    return (
        <RoomsWrapper>
            {/* 遍历每一个roomItem */}
                {
                    roomList?.slice(2, 12)?.map(item => {
                        return <RoomItem itemData={item} itemwidth={itemwidth} key={item.id} />
                    })
                }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms