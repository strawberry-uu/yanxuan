<template>
  <main>
        <div class="header" >
            <router-link to="/index">
                <span class="one"> <img src="../assets/images/look_2.png" alt=""></span>
            </router-link>
            <p style="line-height:35px;font-size:16px">
                值得买
                <span class="two"> <img src="../assets/images/look.png" alt=""></span>
            <router-link to="/buycat">
                <span class="thr"><img src="../assets/images/look_1.png" alt=""></span>
            </router-link>
            </p>
        </div>      
        <div class="nav_top" style="width:100%">
            <div>
                <img src="../assets/images/buy_1.png" alt="">
            </div>
            <div class="nav_1">
                <div>
                    <img src="../assets/images/buy_2.png" alt="" style="width:20%;margin-left:1%">
                    <span style="font-size:12px;color:white;">严选好物&nbsp;用心好生活</span>
                </div>
                <div class="nav" >
                    <ul>
                        <li v-for='(item,index) in listnav'>
                            <router-link :to='item.path'>
                                <img :src='item.src' alt="" class="">
                            </router-link>
                            <p style="font-size:11px;">{{item.b}}</p>
                            <p style="font-size:8px;color:grey">{{item.con}}</p>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        <div class="goods">
            <ul>
                <li v-for='(item,index) in listgods'>
                    <img :src='item.src' alt="" class="" @click="toDetails(item.id)">
                    <p style="font-size:13px">{{item.a}}</p>
                    <br><br>
                    <p style="font-size:12px;color:grey">
                        <img :src="item.src1" ><span>{{item.b}}</span><span><img src="../assets/images/nav_b_2.png" alt=""></span>{{item.c}}
                    </p>
                    <h6>{{item.d}}</h6>
                    <p style="font-size:12px">{{item.e}}</p>
                    <span class="b_buy" style="font-size:12px;color:red">{{item.h}}</span>
                    <br>
                </li> 
            </ul>
        </div>
  </main>
</template>

<script>
import { log } from 'util'
export default {
    data() {
        return {
            listnav:[
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_1.gif',
                    b:'9.9超值',
                    con:'爆品定价直降'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_2.png',
                    b:'员工精选',
                    con:'每天1款内价'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_3.png',
                    b:'好物大赏',
                    con:'官方排名发布'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_4.png',
                    b:'明星商品',
                    con:'百万粉丝之选'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_1.gif',
                    b:'9.9超值',
                    con:'爆品定价直降'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_2.png',
                    b:'员工精选',
                    con:'每天1款内价'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_3.png',
                    b:'好物大赏',
                    con:'官方排名发布'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_4.png',
                    b:'明星商品',
                    con:'百万粉丝之选'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_5.jpg',
                    b:'每月好物',
                    con:'当季必买清单'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_6.png',
                    b:'晒单',
                    con:'入选就有红包'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_7.png',
                    b:'甄选家',
                    con:'爆品免费试用'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_8.png',
                    b:'选购指南',
                    con:'破解选择困难'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_5.jpg',
                    b:'每月好物',
                    con:'当季必买清单'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_6.png',
                    b:'晒单',
                    con:'入选就有红包'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_7.png',
                    b:'甄选家',
                    con:'爆品免费试用'
                },
                {
                    path:'',
                    src:'./src/assets/images/buy_nav_8.png',
                    b:'选购指南',
                    con:'破解选择困难'
                }
            ],
            listgods:[
                {
                    id:'footer',
                    path:'/detail',
                    src:'./src/assets/images/nav_b_3.jpg',
                    a:'两种意见 | 睡前贴一张足贴，一觉睡到天亮',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易云课堂：末末 ',
                    c:'575',
                    d:'',
                    e:'',
                    h:''
                },
                {
                    id:'food',
                    path:'/detail',
                    src:'./src/assets/images/nav_b_98.jpg',
                    a:'喝羊奶长大的冬枣之王，不是一般的甜！',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易游戏：波涛 ',
                    c:'1686',
                    d:'---------------------',
                    e:'皓月智能护目灯',
                    h:'去购买>'
                },
                {
                    path:'',
                    src:'./src/assets/images/nav_b_5.jpg',
                    a:'国AA级护眼认证，开学有这盏灯孩子不近视',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易游戏：波涛 ',
                    c:'1686',
                    d:'---------------------',
                    e:'皓月智能护目灯',
                    h:'去购买>'
                }, 
                {
                    path:'',
                    src:'./src/assets/images/nav_b_3.jpg',
                    a:'两种意见 | 睡前贴一张足贴，一觉睡到天亮',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易云课堂：末末 ',
                    c:'575',
                    d:'',
                    e:'',
                    h:''
                },  
                {
                    path:'',
                    src:'./src/assets/images/nav_b_4.jpg',
                    a:'两种意见 | 睡前贴一张足贴，一觉睡到天亮',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易云课堂：末末 ',
                    c:'575',
                    d:'',
                    e:'',
                    h:''
                },
                {
                    path:'',
                    src:'./src/assets/images/nav_b_5.jpg',
                    a:'国AA级护眼认证，开学有这盏灯孩子不近视',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易游戏：波涛 ',
                    c:'1686',
                    d:'---------------------',
                    e:'皓月智能护目灯',
                    h:'去购买>'
                },
                {
                    path:'',
                    src:'./src/assets/images/nav_b_5.jpg',
                    a:'国AA级护眼认证，开学有这盏灯孩子不近视',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易游戏：波涛 ',
                    c:'1686',
                    d:'---------------------',
                    e:'皓月智能护目灯',
                    h:'去购买>'
                },
                {
                    path:'',
                    src:'./src/assets/images/nav_b_3.jpg',
                    a:'两种意见 | 睡前贴一张足贴，一觉睡到天亮',
                    src1:'./src/assets/images/nav_b_1.jpg',
                    b:'网易云课堂：末末 ',
                    c:'575',
                    d:'',
                    e:'',
                    h:''
                },
                
            ]
        }
    },
    methods: {
        toDetails(id){
            // this.$store.state.detail = [];
            // for(var i in this.$store.state.list){
            //     if(id == this.$store.state.list[i].id){
            //         this.$store.state.detail.push(this.$store.state.list[i])
            //     }
            // }
            // console.log(this.$store.state.detail[0].src_1);
            this.$router.replace({
                path:`/detail/${id}`
            })
        }
    },
}
</script>

<style scoped>
main{
    background-color: #ededed;
}
.header {
    width: 100%;
    text-align: center;
    z-index: 100;
    position: fixed;
    overflow: hidden;
    padding: 1%  0%;
    background-color: white;
}
.header .one{
    position: absolute;
    left: 1%;
    top: 21%;
}
.header .one img{
    width: 50%;
}
.header .two img{
    width:50%
}
.header .two{
    position: absolute;
    top:21%;
    right:12%
}
.header .thr img{
    width:50%
}
.header .thr{
    position: absolute;
    top:21%;
    right:1%
}
.nav{
    overflow: auto;
    width: 96%;
    margin: 2% 2%;
    background-color: #fff;
    border-radius: 5px;
}
.nav ul{
    text-align: center;
    width: 200%;
}
.nav li{
    float: left;
    width: 10.5%;
    margin-top: 1%;
    margin-right: 1.6%;
    margin-bottom: 1%;
}
.nav img{
    width: 80%;
}
.nav li:nth-of-type(8n+1){
    margin-left: 2%;
}
.nav li:nth-of-type(8n){
    margin-right: 0%;
}
.nav_top{
    position: relative;
}
.nav_1{
    overflow: hidden;
    position: absolute;
    top: 26%;
}
.goods{
    width: 96%;
    margin: 24% 2%;
    overflow: hidden;
}
.goods li{
    float: left;
    width: 49%;
    margin-bottom: 2%;
    margin-right: 2%;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    position: relative;
}
.goods li:nth-of-type(2n){
    margin-right: 0%;
    float: right;
}
.goods p img{
    width: 6%;
}
.goods li p{
    margin-left: 3%;
}
.goods .b_buy{
    position: absolute;
    right: 1%;
    bottom: 6%;
}
</style>