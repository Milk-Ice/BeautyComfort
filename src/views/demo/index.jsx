import Indicator from '@/base-ui/indicator'
import React, { memo, useEffect, useState } from 'react'
import { DemoWrapper } from './style'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Demo = memo((props) => {
    const names = ["abc", "cba", "nba", "ccd", "zzz", "esx"]
    const [selectionIndex, setSelectIndex] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeHeaderConfigAction({ idFixed: false }))
    })
    function toggleClickHandle(isNext = true) {
        let newIndex = isNext ? selectionIndex + 1 : selectionIndex - 1
        if (newIndex > names.lengh - 1) newIndex = 0
        if (newIndex < 0) newIndex = names.length - 1
        setSelectIndex(newIndex)
        // console.log(newIndex)
    }
    return (
        <DemoWrapper>
            <div>
                <div className="control">
                    <button onClick={e => toggleClickHandle(false)}>上一个</button>
                    <button onClick={e => toggleClickHandle(true)}>下一个</button>
                </div>
                <div className="list">
                    <Indicator selectionIndex={selectionIndex}>
                        {
                            names.map(item => {
                                return <button>{item}</button>
                            })
                        }
                    </Indicator>
                </div>
            </div>
        </DemoWrapper>
    )
})

Demo.propTypes = {}

export default Demo