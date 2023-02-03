import React from 'react';
import { Swiper } from 'antd-mobile'
import PropTypes from 'prop-types'
import style from './AntiSwiper.module.css'
function AntiSwiper(props) {
    return(
        <Swiper autoplay loop autoplayInterval={1000}
                indicator={(total, current) => (
            <div className={style.customIndicator}>
                {`${current + 1} / ${total}`}
            </div>
        )}>
            {
                props.arr.length>0? props.arr.map((item,index)=>{
                    return <Swiper.Item key={index}>
                        <img src={item.imgUrl} alt="" className={style.imgStyle}/>
                    </Swiper.Item>
                }) : <Swiper.Item >

                </Swiper.Item>

            }
        </Swiper>
    )
}

export default AntiSwiper;
AntiSwiper.propTypes={
    arr:PropTypes.array.isRequired
}