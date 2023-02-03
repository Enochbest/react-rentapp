const express = require('express')
const app = express()

const Mock = require('mockjs')

app.get('/banner',(req,res)=>{
    const data = Mock.mock({
        msg:'ok',
        status:200,
        "banner|3":[
            {
                "id|+1":1,
                "imgUrl|+1":[
                    "https://img0.baidu.com/it/u=3579270958,3486091542&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
                    "https://img95.699pic.com/xsj/02/ge/9d.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
                    "https://img95.699pic.com/xsj/0c/cj/uv.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
                ]
            }
        ]
    })
    res.send(data)
})
app.get('/hotHouse',(req,res)=>{
    let city = req.query.city || '北京'
    const data = Mock.mock({
        msg:'ok',
        status:200,
        "list|6":[
            {
                "id|+1":100,
                "type|1":['整租','合租'],
                "price|2000-8000":1,
                "huxing|1":['一室一厅','两室一厅','三室两厅'],
                'area|50-120.2':1,
                "address":city + '@cword(5,8)',
                "imgUrl|+1":[
                    "https://img0.baidu.com/it/u=3579270958,3486091542&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
                    "https://img95.699pic.com/xsj/02/ge/9d.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
                    "https://img95.699pic.com/xsj/0c/cj/uv.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
                    "https://img95.699pic.com/xsj/1b/ws/hr.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
                    "https://img95.699pic.com/xsj/0o/7x/d2.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast",
                    "https://p6.itc.cn/q_70/images03/20210112/9f34302025404609b32d3ec22a3ae2df.jpeg"
                ]
            }
        ]
    })
    res.send(data)
})

app.listen(8888,()=>{
console.log('3000')
})