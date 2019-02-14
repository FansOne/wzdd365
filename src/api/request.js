import api from './api';
import wepy from 'wepy';
// 获取门店桌位
const merchantTable = (merchant_id)=>{
    return wepy.request({
        url: api.api_.merchantTable,
        method: 'GET',
        data: {
            shop_id : merchant_id
        }
    });
}
// 意见反馈
const feedback = (open_id,content)=>{
    return wepy.request({
        url: api.api_.feedback,
        method: 'POST',
        data: {
            open_id :open_id,
            content : content
        }
    });
}
//获取分类信息类别
const catelog = ()=>{
    return wepy.request({
        url: api.api_.catelog,
        method: 'GET',
        data:{}
    });
}
// 根据类别获取分类信息
const requirement = (type,page)=>{
    return wepy.request({
        url: api.api_.requirement,
        method: 'GET',
        data:{
            type : type,
            page : page
        }
    });
}
//创建点餐订单
const orderFood = (shop_id,open_id,items,total_fee,pay_type,coupon_id,invoice_info)=>{
    return wepy.request({
      url: api.api_.orderFood,
      data: {
        shop_id : shop_id,
        open_id : open_id,
        items: items,
        total_fee : total_fee,
        pay_type : pay_type,
        coupon_id : coupon_id,
        invoice_info : invoice_info
      },
      method: 'POST',
    });
}
// 创建外卖订单
const orderOutsale = (shop_id,open_id,items,total_fee,pay_type,coupon_id,outsale_fee,address_info,invoice_info)=>{
    return wepy.request({
      url: api.api_.orderOutsale,
      data: {
        shop_id : shop_id,
        open_id : open_id,
        items: items,
        total_fee : total_fee,
        pay_type : pay_type,
        coupon_id : coupon_id,
        outsale_fee : outsale_fee,
        address_info : address_info,
        invoice_info : invoice_info
      },
      method: 'POST',
    });
}
// 创建非点餐行业订单
const orderGood = (shop_id,open_id,items,total_fee,pay_type,coupon_id,shippment_fee,address_info,invoice_info)=>{
    return wepy.request({
      url: api.api_.orderGood,
      data: {
        shop_id : shop_id,
        open_id : open_id,
        items: items,
        total_fee : total_fee,
        pay_type : pay_type,
        coupon_id : coupon_id,
        shippment_fee : shippment_fee,
        address_info : address_info,
        invoice_info : invoice_info
      },
      method: 'POST',
    });
}
// 创建买单订单
const orderCash = (shop_id,open_id,total_fee,token,pay_type,coupon_id)=>{
    return wepy.request({
      url: api.api_.orderCash,
      data: {
        shop_id : shop_id,
        open_id : open_id,
        total_fee : total_fee,
        pay_type : pay_type,
        coupon_id : coupon_id
      },
      header: {
        "Autherization": 'Bearer ' + token
      },
      method: 'POST',
    });
}
// 创建秒杀订单
const orderKillbuy = (kill_id,open_id,total_fee,pay_type,shippment_fee,shippment_info)=>{
    return wepy.request({
        url: api.api_.orderKillbuy,
        data: {
            kill_id : kill_id,
            open_id : open_id,
            total_fee : total_fee,
            pay_type : pay_type,
            shippment_fee :shippment_fee,
            shippment_info :shippment_info
        },
        method: 'POST'
    });
}
// 创建团购订单
const orderGroupbuy = (groupbuy_id,open_id,total_fee,pay_type,shippment_fee,shippment_info)=>{
    return wepy.request({
        url: api.api_.orderGroupbuy,
        data: {
            groupbuy_id : groupbuy_id,
            open_id : open_id,
            total_fee : total_fee,
            pay_type : pay_type,
            shippment_fee :shippment_fee,
            shippment_info :shippment_info
        },
        method: 'POST'
    });
}
// WXPay
const WXPay = (open_id,order_id) =>{
    return wepy.request({
        url: api.api_.WXPay,
        data: {
            open_id : open_id,
            order_id : order_id
        },
        method: 'POST'
    });
}
// 获取电子地图分类信息类别
const mapCatelog = () =>{
    return wepy.request({
        url: api.api_.mapCatelog,
        data: {},
        method: 'GET'
    });
}
//收藏店铺
const favoriting = (open_id,shop_id) =>{
    return wepy.request({
        url: api.api_.userFavoriting,
        data: {
            open_id : open_id,
            shop_id : shop_id
        },
        method: 'POST'
    });
}
// 用户钱包/金豆余额
const userWallet = (open_id,shop_id,total_fee) =>{
    return wepy.request({
        url: api.api_.userWallet,
        data: {
            open_id : open_id,
            shop_id : shop_id,
            total_fee: total_fee || 0
        },
        method: 'GET'
    });
}
// 获取用户钱包信息
const userWallet_ = (open_id,page)=>{
    return wepy.request({
        url: api.api_.userWallet_,
        data: {
            open_id : open_id,
            page: page
        },
        method: 'GET'
    });
}
//获取会员卡二维码
const userQr = (open_id)=>{
    return wepy.request({
        url: api.api_.userQr,
        data: {
            open_id : open_id,
        },
        method: 'GET'
    });
}
// 钱包/金豆充值优惠
const recharge = (type)=>{
    return wepy.request({
        url: api.api_.recharge,
        data: {
            type : type,
        },
        method: 'GET'
    });
}
//创建钱包充值订单
const orderWallet = (open_id,recharge_id,total_fee)=>{
    return wepy.request({
        url: api.api_.orderWallet,
        data: {
            open_id : open_id,
            recharge_id : recharge_id,
            total_fee : total_fee
        },
        method: 'POST'
    });
}
// 创建金豆兑换订单
const orderGold_charge = (open_id,total)=>{
    return wepy.request({
        url: api.api_.orderGold_charge,
        data: {
            open_id : open_id,
            total : total
        },
        method: 'POST'
    });
}
// 创建金豆充值订单
const orderGold  = (open_id,recharge_id,total_fee,pay_type)=>{
    return wepy.request({
        url: api.api_.orderGold,
        data: {
            open_id : open_id,
            recharge_id : recharge_id,
            total_fee : total_fee,
            pay_type: pay_type
        },
        method: 'POST'
    });
}
// 创建抽奖订单
const orderLottery = (lottery_id,open_id,gold,shippment_fee,shippment_info)=>{
    return wepy.request({
        url: api.api_.orderLottery,
        data: {
            lottery_id : lottery_id,
            open_id : open_id,
            gold : gold,
            shippment_fee :shippment_fee,
            shippment_info :shippment_info
        },
        method: 'POST'
    });
}
//获取会员优惠券信息
const userCoupons = (open_id,type,page)=>{
    return wepy.request({
        url: api.api_.userCoupons,
        data: {
            open_id : open_id,
            type : type,
            page : page
        },
        method: 'GET'
    });
}

// 获取买单可用优惠券
const cashCoupons = (open_id,type,total_fee)=>{
    return wepy.request({
        url: api.api_.cashCoupons,
        data: {
            open_id : open_id,
            type : type,
            total_fee : total_fee
        },
        method: 'POST'
    });
}
const subscribe = (shop_id,open_id,subscribe_date,subscribe_time,shop_room_id,people,contact,mobile,desc)=>{
    return wepy.request({
        url: api.api_.subscribe,
        data: {
            shop_id : shop_id,
            open_id : open_id,
            subscribe_date : subscribe_date,
            subscribe_time : subscribe_time,
            shop_room_id : shop_room_id,
            people : people,
            contact : contact,
            mobile : mobile,
            desc : desc
        },
        method: 'POST'
    });
}
const shopCoupon = (type,shop_id) =>{
    return wepy.request({
      url: api.api_.shopCoupon,
      data: {
        type: type,
        shop_id :shop_id
      },
      method: 'GET'
    });
    
}
const userGet_coupon = (open_id,coupon_id) =>{
    return wepy.request({
        url: api.api_.userGet_coupon,
        data: {
            open_id: open_id,
            coupon_id :coupon_id
        },
        method: 'POST'
    });
}
//根据类别获取电子地图信息
const map = (type,page)=>{
    return wepy.request({
        url: api.api_.map,
        data: {
            type: type,
            page : page
        },
        method: 'GET'
    });
}
// 获取地图详情
const mapDetail = (map_id)=>{
    return wepy.request({
        url: api.api_.mapDetail,
        data: {
            map_id : map_id
        },
        method: 'GET'
    });
}
//分类信息发布
const infoPublish = (open_id,catelog_id,title,summary,pics)=>{
    return wepy.request({
        url: api.api_.infoPublish,
        data: {
            open_id:open_id,
            catelog_id:catelog_id,
            title:title,
            summary:summary,
            pics:pics
        },
        method: 'POST'
    });
}
//获取商户评价
const shopComments = (shop_id,page)=>{
    return wepy.request({
        url: api.api_.shopComments,
        data: {
            shop_id : shop_id,
            page: page
        },
        method: 'GET'
    });
}
// 订单评价
const orderRate = (open_id,shop_id,order_id,rate,content,pics)=>{
    return wepy.request({
        url: api.api_.orderRate,
        data: {
            open_id : open_id,
            shop_id : shop_id,
            rate : rate,
            content : content,
            pics : pics,
            order_id:order_id
        },
        method: 'POST'
    });
}
// 订单详情
const orderDetail = (order_id,open_id)=>{
    return wepy.request({
        url: api.api_.orderDetail,
        data: {
            open_id : open_id,
            order_id : order_id
        },
        method: 'POST'
    });
}
const orderSigneds = (order_id,open_id)=>{
    return wepy.request({
        url: api.api_.orderSigneds,
        data: {
            open_id : open_id,
            order_id : order_id
        },
        method: 'POST'
    });
}
// 创建拼团订单
const orderTeambuy =(teambuy_id,open_id,total_fee,pay_type,shippment_fee,shippment_info)=>{
    return wepy.request({
        url: api.api_.orderTeambuy,
        data: {
            teambuy_id : teambuy_id,
            open_id : open_id,
            total_fee : total_fee,
            pay_type : pay_type,
            shippment_fee : shippment_fee,
            shippment_info : shippment_info
        },
        method: 'POST'
    });
}
// 加入一个拼团
const orderJoin_teambuy = (teambuy_id,parent_order_id,open_id,total_fee,pay_type,shippment_fee,shippment_info)=>{
    return wepy.request({
        url: api.api_.orderJoin_teambuy,
        data: {
            teambuy_id : teambuy_id,
            parent_order_id	:parent_order_id,
            open_id : open_id,
            total_fee : total_fee,
            pay_type : pay_type,
            shippment_fee : shippment_fee,
            shippment_info : shippment_info
        },
        method: 'POST'
    });
}
const orderShare_teambuy = (order_id)=>{
    return wepy.request({
        url: api.api_.orderShare_teambuy,
        data: {
            order_id : order_id
        },
        method: 'GET'
    });
}
// 抽奖免单
const free = (open_id,order_id)=>{
    return wepy.request({
        url: api.api_.free,
        data: {
            open_id : open_id,
            order_id : order_id
        },
        method: 'POST'
    });
}
// 申请退款
const orderRefuse = (order_id,open_id,refund_reason,refund_summary)=>{
    return wepy.request({
        url: api.api_.orderRefuse,
        data: {
            open_id : open_id,
            order_id : order_id,
            refund_reason : refund_reason,
            refund_summary : refund_summary
        },
        method: 'POST'
    });
}
//获取服务热线
const appSetting = ()=>{
    return wepy.request({
        url: api.api_.appSetting,
        method: 'GET'
    });
}
//获取大转盘奖池
const bonus = ()=>{
    return wepy.request({
        url: api.api_.bonus,
        method: 'GET'
    });
}
// 大转盘抽奖
const bonusBingo = (open_id)=>{
    return wepy.request({
        url: api.api_.bonusBingo,
        method: 'GET',
        data:{
            open_id:open_id
        }
    });
}
// 获取新用户大礼包奖品
const userGet_gift = ()=>{
    return wepy.request({
        url: api.api_.userGet_gift,
        method: 'GET'
    });
}
// 领取礼包
const userGift = (open_id) =>{
    return wepy.request({
        url: api.api_.userGift,
        method: 'GET',
        data:{
            open_id : open_id
        }
    });
}
module.exports = {
    merchantTable,
    feedback,
    catelog,
    requirement,
    orderCash,
    WXPay,
    mapCatelog,
    favoriting,
    orderFood,
    userWallet,
    orderOutsale,
    orderGood,
    subscribe,
    shopCoupon,
    userGet_coupon,
    orderKillbuy,
    userWallet_,
    userQr,
    recharge,
    orderWallet,
    orderGold_charge,
    orderGold,
    userCoupons,
    cashCoupons,
    map,
    mapDetail,
    infoPublish,
    orderGroupbuy,
    orderLottery,
    shopComments,
    orderRate,
    orderDetail,
    orderSigneds,
    orderTeambuy,
    orderJoin_teambuy,
    orderShare_teambuy,
    free,
    orderRefuse,
    appSetting,
    bonus,
    bonusBingo,
    userGet_gift,
    userGift  
}