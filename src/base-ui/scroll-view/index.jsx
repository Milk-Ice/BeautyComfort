import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

import IconArrowRight from '@/assets/css/svg/icon_ArrowRight';
import IconArrowLeft from '@/assets/css/svg/icon_ArrowLeft';

const ScrollView = memo((props) => {
    // 定义内容的状态
    const [showRight, setShowRight] = useState(false); // 用于控制右侧按钮的显示
    const [showLeft, setShowLeft] = useState(false); // 用于控制右侧按钮的显示
    const [posIndex, setPosIndex] = useState(0); // 用于跟踪当前位置索引
    const totalDistanceRef = useRef(); // 用于存储总距离的引用

    // 右侧按钮点击事件处理函数
    const controlClickHanle = function (isRight) {
        const newIndex = isRight? posIndex + 1 : posIndex - 1;
        const newEl = scrollContentRef.current.children[newIndex];
        const newOffsetLeft = newEl.offsetLeft;

        // 利用 CSS transform 实现滚动效果
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
        setPosIndex(newIndex);

        // 更新右侧按钮的显示状态
        setShowRight(totalDistanceRef.current > newOffsetLeft);
        // 更新左侧按钮的显示状态
        setShowLeft(newOffsetLeft > 0)
    }
    const scrollContentRef = useRef(); // 用于访问滚动容器的引用

    useEffect(() => {
        // 计算总滚动距离
        const scrollWidth = scrollContentRef.current.scrollWidth; // 整个可滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth; // 容器自身的宽度
        const totalDistance = scrollWidth - clientWidth; // 剩余可滚动的宽度

        // 存储总距离到引用中
        totalDistanceRef.current = totalDistance;

        // 初始时根据总距离设置右侧按钮的显示状态
        setShowRight(totalDistance > 0);
    }, [props.children]);

    return (
        <ViewWrapper>
           {showLeft && <div className='control left' onClick={e => controlClickHanle(false)}><IconArrowLeft /></div>}
            {showRight && <div className='control right'  onClick={e => controlClickHanle(true)}><IconArrowRight /></div>}

            <div className='scroll'>
                <div className='scroll-content' ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

ScrollView.propTypes = {}

export default ScrollView;
