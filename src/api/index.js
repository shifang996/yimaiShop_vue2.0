import http from './http';


//获取推荐数据
export let allData = () => {
    return http.get("/Interface/recommendlists")
}

//获取详情页数据
export let informationForshop =(code)=>{
    return http.get('/item/index?gid='+code)
}