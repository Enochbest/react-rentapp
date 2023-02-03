import React from 'react';
import PropTypes from 'prop-types'
import style from "./HouseList.module.css";
function HouseList(props) {
    return(
        <div className={style.listBox}>
            <div className={style.hotHouse}>热门房源</div>
            <div className={style.list}>
                {props.houseList.map(item=>{
                    return <div className={style.houseCard} key={item.id}>
                        <div className={style.houseImgbox}>
                            <img src={item.imgUrl} alt="" className={style.houseImg}/>
                        </div>
                        <div className={style.infoBox}>
                            <div>
                                <div>{item.huxing}</div>
                                <div><span className={style.priceColor}>{item.price}</span>/月</div>
                            </div>
                            <div>
                                <div>{item.address}</div>
                                <div>{item.type}</div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}
export default HouseList;
HouseList.propTypes={
    houseList:PropTypes.array.isRequired
}