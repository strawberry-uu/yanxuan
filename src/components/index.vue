<template >
    <main>
        <div class="top">
            <label for="">网易严选</label>
            <input type="text" placeholder="搜索商品，共36085款好物" class="a">
            <router-link to="/login">
                <button class="btn">登录</button>
            </router-link>
            <div class="one">
                <ul >
                    <li v-for="(item,index) in listtop">
                        <router-link :to='item.path'>
                        {{item.con}}
                        </router-link>
                    </li>
                </ul>
                
            </div>
            <span><img src="../assets/images/s_b.png" alt=""></span>
        </div>
        <div class="LBT">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="../assets/images/LBT_1.webp" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/LBT_2.webp" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/LBT_3.webp" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/LBT_4.webp" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/LBT_5.webp" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/LBT_6.webp" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/images/LBT_7.webp" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="small">
            <ul>
                <li v-for="(item,index) in list" >
                    <router-link :to='item.path'>
                        <i><img :src="item.src" alt=""></i>
                        <span>{{item.con}}</span>
                    </router-link>  
                </li>
            </ul>
        </div>
        <div class="goods">
            <ul>
                <li v-for="(item,index) in listgoods">
                    <router-link :to='item.path'>
                        <i><img :src="item.src" alt=""></i>
                        {{item.con}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="adver">
            <ul>
                <li v-for="(item,index) in listadver">
                    <router-link :to='item.path'>
                        <i><img :src="item.src" alt=""></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="bck"></div>
        <div class="cont">
            <p style="text-align: center;margin-bottom:10px">一 新人专享礼 一</p>
            <ul>
                <li style="background-color:#f9e9cf;margin-right:2%"  class="cont_one">
                    <p style="margin:10px 10px ">新人专享礼包</p>
                    <img src='../assets/images/new_1.png' alt="">
                </li>
                <li style="background-color:#fbe2d3" class="cont_two">
                    <img src="../assets/images/new_4.png" alt="">
                </li>
                <li style="background-color:#ffecc2" class="cont_thr">
                    <img src="../assets/images/new_5.png" alt="">
                </li>
            </ul>
        </div>
        <div class="bck"></div>
        <div class="cont_2" >
            <p style="margin-top:3%">类目热销榜</p>
            <ul class="cont_2_u1">
                <li v-for="(item,index) in listcont_2">
                    <router-link :to='item.path'>
                    <div>
                        <span>{{item.con}}<br>一</span>
                    </div>
                    <div>
                        <img :src="item.src" alt="">
                    </div>
                    </router-link>
                </li>
            </ul>
            <ul class="cont_2_u2">
                <li v-for="(item,index) in listcont_3">
                    <router-link :to='item.path'>
                        <P>{{item.con}}</P>
                        <img :src="item.src" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="bck" style="margin-top:8px"></div>
        <div class="cont_3">
            <div class="cont_3_top">
                        <div class="cont_3_left">限时购</div>
                        <div class="cont_3_right" style="color:red">更多></div>
            </div>
            <ul>
                <li v-for="(item,index) in listcont_3_1">
                    <router-link :to='item.path'>
                    
                    <div>
                        <img :src="item.src" alt="">
                        <span class="a">{{item.a}}</span>
                        <span class="b">{{item.b}}</span>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="bck"></div>
        <div class="cont_4">
            <div class="cont_4_top">
                        <div class="cont_4_left">新品首发</div>
                        <div class="cont_4_right">更多></div>
            </div>
            <ul>
                <li v-for="(item,index) in listcont_4">
                    <router-link :to='item.path'>
                    
                    <div>
                        <img :src="item.src" alt="">
                        <p class="c">{{item.con}}</p>
                        <p class="a">{{item.a}}</p>
                        <span class="b">{{item.b}}</span>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="bck"></div>
        <div class="cont_5">
            <ul>
                <li>
                    <img src="../assets/images/cont_5_1.png" alt="">
                    
                </li>
                <li>
                    <img src="../assets/images/cont_5_2.png" alt="">
                </li>
            </ul>
        </div>
        <div class="bck"></div>
        <div class="header">
            <div class="btn">
                <button>下载APP</button>
                <button>电脑版</button>
            </div>
            <P>网易公司版权所有 © 1997-</P>
            <p>食品经营许可证：JY13301080111719</p>
            <span @click="top()"><img src="../assets/images/header_1.png" alt=""></span>
        </div>
    </main>
</template>

<script>
    export default{
        methods: {
            top(){
                var timer = setInterval(function(){
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5); 
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    this.isTop = true;
                    if(osTop === 0){
                    clearInterval(timer);
                    }
                },30)
            }
        },
        data(){
            return {
                 listtop:[
                {   
                    con:'推荐',
                    path:'' 
                },
                {
                    con:'居家生活',
                    path:'' 
                },
                {
                    con:'服饰鞋包',
                    path:'' 
                },
                {
                    con:'美食酒水',
                    path:'' 
                },
                {
                    con:'个护清洁',
                    path:'' 
                },
                {
                    con:'母婴亲子',
                    path:'' 
                },
                
                {
                    con:'运动旅行',
                    path:'' 
                },
                {
                    con:'数码家电',
                    path:'' 
                },
                {
                    con:'严选全球',
                    path:'' 
                }
                ],
                list:[
                    {
                        path:'',
                        src:'./src/assets/images/index_small1.png',
                        con:'网易自营品牌'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/index_small2.png',
                        con:'30天无忧退货'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/index_small3.png',
                        con:'48小时快速退款'
                    }
                ],
                listgoods:[
                    {
                        path:'',
                        src:'./src/assets/images/goods_1.png',
                        con:'新品首发'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_2.png',
                        con:'居家生活'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_3.png',
                        con:'服饰鞋包'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_4.png',
                        con:'美食酒水'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_5.png',
                        con:'个护清理'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_1_1.png',
                        con:'母婴亲子'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_1_2.png',
                        con:'运动旅行'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_1_3.png',
                        con:'数码家电'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_1_4.png',
                        con:'全球特色'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/goods_1_5.gif',
                        con:'好货抄底'
                     }
                ],
                listadver:[
                    {
                        path:"",
                        src:'./src/assets/images/adver_1.webp'
                    },
                    {
                        path:"",
                        src:'./src/assets/images/adver_2.webp'
                    }
                ],
                listcont_2:[
                    {
                        path:'',
                        con:'热销榜',
                        src:'./src/assets/images/cont_2_1.webp'
                    },
                    {
                        path:'',
                        con:'好评榜',
                        src:'./src/assets/images/cont_2_2.webp'
                    }
                ],
                listcont_3:[
                    {
                        path:'',
                        con:'服饰鞋包榜',
                        src:'./src/assets/images/cont_3_1.webp'
                    },
                    {
                        path:'',
                        con:'居家生活榜',
                        src:'./src/assets/images/cont_3_2.webp'
                    },
                    {
                        path:'',
                        con:'美食酒水榜',
                        src:'./src/assets/images/cont_3_3.webp'
                    },
                    {
                        path:'',
                        con:'个护清洁榜',
                        src:'./src/assets/images/cont_3_4.webp'
                    },
                    {
                        path:'',
                        con:'母婴亲子榜',
                        src:'./src/assets/images/goods_1_1.png'
                    },
                    {
                        path:'',
                        con:'运动旅行榜',
                        src:'./src/assets/images/goods_1_2.png'
                    },
                    {
                        path:'',
                        con:'居家生活榜',
                        src:'./src/assets/images/goods_1_3.png'
                    },
                    {
                        path:'',
                        con:'严选全球榜',
                        src:'./src/assets/images/goods_1_4.png'
                    }
                ],
                listcont_3_1:[
                    {
                        path:'',
                        src:'./src/assets/images/cont_3_s1.webp',
                        a:'￥59',
                        b:'￥69'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_3_s2.webp',
                        a:'￥2729',
                        b:'￥3499'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_3_s3.webp',
                        a:'￥59.9',
                        b:'￥72'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_3_s4.webp',
                        a:'￥69.9',
                        b:'￥99'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_3_s5.webp',
                        a:'￥13.9',
                        b:'￥16'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_3_s6.webp',
                        a:'￥198',
                        b:'￥298'
                    },
                ],
                listcont_4:[
                    {
                        path:'',
                        src:'./src/assets/images/cont_4_1.webp',
                        con:'国潮养生系列 守护你的发际线，黑芝麻丸 100克',
                        a:'￥59',
                        b:'特价'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_4_2.webp',
                        con:'熨斗界的颜值担当，马卡龙电熨斗',
                        a:'￥2729',
                        b:'七夕特惠'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_4_3.webp',
                        con:'国潮养生系列 让肺呼吸更畅快，润与茶 10克*12袋',
                        a:'￥59.9',
                        b:'特价'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_4_4.webp',
                        con:'春风嘟嘟球肉感飞机杯',
                        a:'￥69.9',
                        b:'新品限购'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_4_5.webp',
                        con:'享自由裸睡，天竺棉全棉针织拼色四件套',
                        a:'￥13.9',
                        b:'每满150减20卷'
                    },
                    {
                        path:'',
                        src:'./src/assets/images/cont_4_6.webp',
                        con:'好消化易吸收，悦白婴幼儿羊奶粉',
                        a:'￥198',
                        b:'好东西'
                    },
                ]
            }
        }
    }
</script>


<style scoped>

.top{
    background-color: white;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0%;
    overflow: hidden;
    height: 8%;
    border-bottom: 1px solid gray;
    padding-top: 2%;
}
.top i{
    width: 4%;
    position: absolute;
    top: 5%;
    left: 50%;
}
.top span{
    width: 20px;
    height: 20px;
    position:absolute;
    top: 58%;
    right: 4%;
}
.top .btn{
    font-size: 12px;
    color: red;
    background-color: #fff;
    border: 1px solid red;
    border-radius: 5px;
    margin-left: 1%;
}
.one{
    width: 80%;
    overflow: auto;
}
.one ul{
    width: 225%;
}
.one li{
    text-align: center;
    width: 11.111111%;
    float: left;
    font-size: 12px;
    line-height: 28px;
}
label{
    margin-left: 2%;
}
input{
    width: 55%;
    margin-left: 2%;
    font-size: 12px;
}
.main{
    margin-top: 19%;
}


.small{
    background-color: white;
    width: 96%;
    margin: 10px 2%;
    overflow: hidden;
}
.small ul{
    width: 100%;
}

.small li{
    float: left;
    width: 33.33%;
    font-size: 8px;
    position: relative;
}
.small li img{
    width: 12%;
    position:absolute;
    top: 0px;
    left: 0px;
}
.small li span{
    margin-left: 14px;
}
.goods{
    width: 96%;
    padding: 0px 2%;
    overflow: hidden;
}
.goods li{
    background-color: white;
    float: left;
    width: 18.2%;
    text-align: center;
    font-size: 8px;
    margin-right: 6px;
    margin-top: 10px;
}
.goods li:nth-of-type(5n){
    margin-right: 0px;
}
.adver{
    width: 100%;
    overflow: hidden;
    background-color: brown;
    padding-top: 10px ;
    margin-top: 5%;
}
a:visited{
    color: black;
}
.router-link-active {
  text-decoration: none;
}
.cont{
    width: 96%;
    overflow: hidden;
    padding: 10px 2%;
    font-size: 14px;
}
.cont li{
    float: left;
    width: 47.5%;
    border-radius: 10px;
    margin-left: 1%;
}
.cont_one img{
    width: 60%;
    margin: 16% 20%;
    margin-bottom: 24%;
}
.cont_two{
    overflow: hidden;
    margin-bottom: 1%;
}
.cont_two img{
    width: 100%;
}
.cont_thr{
    overflow: hidden;
}
.cont_thr img{
    width: 100%;
}
.cont_2{
    overflow: hidden;
    padding: 0px 2%;
    width: 96%;
}
.cont_2 span{
    font-size: 12px;
}
.cont_2_u1{
    width: 100%;
    margin: 10px 0px;
}
.cont_2_u1 li{
    overflow: hidden;
    width: 47.5%;
    float: left;
    background: #f9f3e4;
    margin-left: 4px;
    
}
.cont_2_u1 li:nth-of-type(2n){
    margin-left: 2%;
    background: #ebeff6;
}
.cont_2 div{
    overflow: hidden;
    float: left;
    width: 50%;
}
.cont_2_u2{
    font-size: 10px;
    text-align: center;
}
.cont_2_u2 li{
    margin-top: 1%;
    background: #f5f5f5;
    width: 23.25%;
    float: left;
    margin-right: 1.3%;
}
.cont_2_u2 li:nth-of-type(4n+1){
    margin-left: 4px;
}
.cont_2_u2 li:nth-of-type(4n){
    margin-right: 0px;
}

.cont_3{
    width: 96%;
    padding: 10px 2%;
    overflow: hidden;
}
.cont_3_top{
    width: 100%;
    overflow: hidden;
}
.cont_3 .cont_3_left{
    float: left;
    margin: 5% 1%;
}
.cont_3 .cont_3_right{
    float: right;
    margin: 5% 0%;
}
.cont_3 ul li{
    width: 30%;
    float: left;
    margin-right: 3%;
    margin-bottom: 3%;
}
.cont_3 ul li:nth-of-type(3n+1){
    margin-left: 4px;
}
.cont_3 ul li:nth-of-type(3n){
    margin-right: 0px;
}
.cont_3 img{
    width: 100%;
    background: #f5f5f5;
}
.cont_3 .a{
    font-size: 10px;
    color: red;
}
.cont_3 .b{
    font-size: 8px;
    color: grey;
    text-decoration:line-through
}

.cont_4{
    width: 96%;
    padding: 10px 2%;
    overflow: hidden;
}
.cont_4_top{
    width: 100%;
    overflow: hidden;
}
.cont_4 .cont_4_left{
    float: left;
    margin: 5% 1%;
}
.cont_4 .cont_4_right{
    float: right;
    margin: 5% 0%;
}
.cont_4 ul li{
    width: 30%;
    float: left;
    margin-right: 3%;
    margin-bottom: 3%;
}
.cont_4 ul li:nth-of-type(3n+1){
    margin-left: 4px;
}
.cont_4 ul li:nth-of-type(3n){
    margin-right: 0px;
}
.cont_4 img{
    width: 100%;
    background: #f5f5f5;
}
.cont_4 .c{
    font-size: 10px;
}
.cont_4 .a{
    font-size: 10px;
    color: red;
}
.cont_4 .b{
    font-size: 10px;
    color: red;
    border: 1px solid red ;
    border-radius: 4px;
}
.cont_5{
    overflow: hidden;
    width: 96%;
    padding: 10px 2%;
}
.cont_5 li{
    float: left;
    width: 47.5%;
    margin-left: 2%;
    background-color: #f5f5f5;
}
.cont_5 li:nth-of-type(1){
    margin-left: 4px;
}
.header{
    width: 100%;
    padding: 5% 0px;
    text-align: center;
    background-color: #414141;
    position: relative;
}
.header .btn{
    
    outline: none;
    margin-bottom: 5%;
    background-color: #414141;
    color: white;
}
.header p{
    font-size: 12px;
}

.header img{
    width: 100%;
}
.header span{
    width: 10%;
    position: absolute;
    right: 1%;
    bottom: 5%;
}
.bck{
    width: 100%;
    height: 5px;
    background: #f5f5f5;
}
main{
    margin-bottom: 12%;
}
</style>

<style>
.LBT {
    margin-top: 16.5%;
}
.LBT img{
    width: 100%;
}
.LBT .mint-swipe-items-wrap{
    padding-bottom: 49.375%;
}
</style>