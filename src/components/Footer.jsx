import React ,{ useState,useEffect }from 'react';
import {useNavigate,useLocation} from 'react-router-dom'
import { Badge, TabBar } from 'antd-mobile'
import mystyle from './Footer.module.css'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
const tabs = [
    {
        key: '/home',
        title: '首页',
        icon: <AppOutline />,
    },
    {
        key: '/shop',
        title: '商城',
        icon: <UnorderedListOutline />,
    },
    {
        key: '/life',
        title: '生活服务',
        icon:<MessageOutline />,
    },
    {
        key: '/about',
        title: '我的',
        icon: <UserOutline />,
    },
]
function Footer() {
    //定义高亮显示页面
    //底部导航栏切换事件
    const navigate = useNavigate()
    const location = useLocation()
    const[activeKey,setActiveKey] = useState('/home')
    useEffect(()=>{
        setActiveKey(location.pathname)
    },[])




    const changeTab=(val)=>{
        console.log(val)
        //修改激活图标
        setActiveKey(val)
        navigate(val)
    }
    return(
        <div className={mystyle.container}>
            <TabBar activeKey={activeKey} onChange={changeTab}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    )
}

export default Footer;
