<template>
    <main>
        <div class="header" >
                <span class="one"> 购物车</span>
                <span class="two" @click="go()" v-html="obtn"></span>
                <span class="thr">领卷</span>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in list">
                    <img src="../assets/images/buycat_1.webp" alt="" style="width:10%">
                    {{item.con}}
                </li>
            </ul>
        </div>

        <div class="pre">
            <ul>
                <li v-for="(item,index) in datalist">
                    <input type="checkbox" v-model="checkgroup" :value="item" @change="handleliChange" >
                    
                    <img :src="item.src">
                    <div>
                    <p>{{item.con}}</p><br>
                    <span>￥{{item.a}}</span>
                    <div style="margin-left:80%">
                        <span @click="numChange(item)">- </span>{{item.num}}
                        <span@click="item.num++">+</span>
                    </div>
                    </div>
                    
                </li>
            </ul>
        </div>

        <div class="btm">
            <div class="btm_left"> 
                <input type="checkbox" @change="handleChange" v-model="isAllChecked">
                <span>总金额：{{getSum()}}</span>
            </div>
            <button :class="{clo:ischo}" class="obtn" v-html="btn" ></button>

        </div>
    </main>
</template>

<script>
import { log } from 'util'
export default {
    
    
    methods:{
        getSum(){
            var sum=0
            for(var i in this.checkgroup){
                sum += this.checkgroup[i].a*this.checkgroup[i].num
            }
            return sum
        },
        handleChange(){
            if(this.isAllChecked){
                this.checkgroup = this.datalist
                this.ischo = true
            }else{
                this.checkgroup=[]
                this.ischo = false
            }
            
        },
        handleliChange(){
            if( this.checkgroup.length === this.datalist.length){
                this.isAllChecked = true
                
            }else{
                this.isAllChecked = false
                
            }
            if(this.checkgroup.length === 0){
                this.ischo = false
            }else{
                this.ischo = true
            }
        },
        numChange(item){
            var num = item.num--
            if(num ===1){
                item.num=1
            }
        },
        go(){
            if(this.btn=='删除'){
                this.btn='下单'
            }else{
                this.btn='删除'
            }
            if(this.obtn=='编辑'){
                this.obtn='完成'
            }else{
                this.obtn='编辑'
            }
        },
    },
    data() {
        return {
            checkgroup:[],
            isAllChecked:false,
            ischo:false,
            obtn:'编辑',
            btn:'下单',
            list:[
                {
                    con:'30天无忧退货'
                },
                {
                    con:'24小时速快领取'
                },
                {
                    con:'满99元免邮费'
                },
            ],
            datalist:[
                {
                    src:'./src/assets/images/buycat_d_1.webp',
                    con:'清凉舒缓植物配方 蚊虫叮咬温和止痒液',
                    a:9.9,
                    num:1
                },
                {
                    src:'./src/assets/images/buycat_d_2.webp',
                    con:' 【丁磊直播款】多功能人体工学转椅 ',
                    a:1399, 
                    num:1
                },
                {
                    src:'./src/assets/images/buycat_d_3.webp',
                    con:'控卡轻食放心吃肉，鸡与蛋白菓 25克*8袋',
                    a:22,     
                    num:1
                },
                {
                    src:'./src/assets/images/buycat_d_1.webp',
                    con:'控卡轻食放心吃肉，鸡与蛋白菓 25克*8袋',
                    a:22,     
                    num:1
                },
                {
                    src:'./src/assets/images/buycat_d_2.webp',
                    con:'控卡轻食放心吃肉，鸡与蛋白菓 25克*8袋',
                    a:22,     
                    num:1
                }
            ],
            
        }
    },
}
</script>

<style scoped>
.header{
    padding: 2% 4%;
    width: 92%;
    overflow: hidden;
    border-bottom: 1px solid grey;
    position: fixed;
    top: 0%;
    background-color: white;
}
.header .one{
    float: left;
}
.header .thr{
    border: 1px solid red;
    border-radius: 10px;
    font-size: 12px;
    background-color: #f8141c;
    color: white;
    float: right;
    margin-right: 3%;
}

.header .two{
    font-size: 14px;
    float: right;
}
.nav{
    margin-top: 10.5%;
    overflow: hidden;
    padding: 2% 0%;
    background-color: #eee;
}
.nav ul{
    width: 100%;
}
.nav li{
    float: left;
    font-size: 12px;
    color: #666;
    margin-left: 4%;
}

.pre{
    
    margin-bottom: 34%;
}
.pre ul{
    background-color:#eee;
}
.pre li{
    margin-top: 4%;
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    background-color: white;
    padding: 2% 0%;
}
.pre li input{
    float: left;
}
.pre li img{
    width: 23%;
    background-color:  #eee;
    margin-left: 1%;
    float: left;
}

.pre li>div{
    width: 70%;
    float: left;
    margin-left: 2%;
}
.pre .btn{
    margin-left: 76%;
}
.pre .btn button{
    width: 2%;
   background-color: white;
   border: 1px solid grey;
}










.btm{
    border-top:1px solid grey ;
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 8%;
    z-index: 100;
    background-color: white;
}
.btm .btm_left{
    float: left;
    margin-top: 5%;
    margin-left: 2%;
}
.btm button{
    border: none;
    width: 35%;
    padding: 6% 0%;
    margin-right: 0%;
    float: right;
    color: white;
}
.clo{
    background-color: red;
}

</style>