import React,{useState,useEffect} from 'react';
import style from './home.module.css'
import {useNavigate} from 'react-router-dom'
import { DownOutline,TruckOutline } from 'antd-mobile-icons'
import Search from "../../components/search/Search";
import AntiSwiper from "../../components/AntiSwiper/AntiSwiper";
import HouseList from "../../components/HoustList/HouseList";
import api from '../../api/index'
function Home() {
    const [banners,setBanner] = useState([])
    const [houseList,setHouseList] = useState([])



    const navigate = useNavigate()
    //生命周期函数进行网络请求
    useEffect(()=>{
        getImgList()
        getHouseList()
    },[])
    //获取轮播图列表
    const getImgList =()=>{
        api.getBanner().then(res=>{
            console.log(res)
            setBanner(res.data.banner)
        })
    }

    //获取热门房源列表
    const getHouseList = ()=>{
        api.getHotHouseList().then(res=>{
            console.log(res)
            setHouseList(res.data.list)
        })
    }
    const toCity = ()=>{
        navigate('/city')
    }
    return(
        <div>
            <div className={style.header}>
                <div className={style.location} onClick={toCity}>北京<DownOutline /></div>
                <Search/>
                <div className={style.chart}><TruckOutline /></div>
            </div>
            {/*轮播图区域*/}
            <div className={style.swiperBox}>
                <AntiSwiper arr={banners}/>
            </div>
            <div className={style.contentBox}>
                <div className={style.item}>找舍友</div>
                <div className={style.item}>宜居社区</div>
            </div>
            <HouseList houseList={houseList}/>
        </div>
    )
}

export default Home;
