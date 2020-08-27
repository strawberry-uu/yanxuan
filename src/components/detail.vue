<template>
    <main>
        <ul>
            <li>
                <div class="header">
                    <img :src="list_detail.src_1" alt="" style="width:8%;border-radius:50%">
                    <span class="a">{{list_detail.sp}}</span>
                </div>
                <div class="con">
                    <h3>{{list_detail.a}}</h3>
                    <p>----</p>
                    <img :src="list_detail.src_2" alt="" style="width:100%;margin:2% 0%">
                    <p>{{list_detail.p_1}}</p><br>
                    <p>{{list_detail.p_2}}</p><br>
                    <p>{{list_detail.p_3}}</p><br>
                    <p>{{list_detail.p_4}}</p><br>
                    <p>{{list_detail.p_5}}</p><br>
                    <p>{{list_detail.p_6}}</p><br>
                    <p>{{list_detail.p_7}}</p><br>
                    <p>{{list_detail.p_8}}</p><br>
                    <div class="cont">
                        <img :src="list_detail.src_3" alt="">
                        <span style="font-size:10px;background-color: #e36843;">{{list_detail.b}}</span><br>
                        <span style="font-size:12px">{{list_detail.c}}</span><br>
                        <span style="font-size:10px;color:grey">{{list_detail.d}}</span><br>
                        <span style="font-size:14px;color:red">￥{{list_detail.e}}</span>
                        <span style="font-size:10px;text-decoration:line-through;color:grey">￥{{list_detail.f}}</span><br>
                        <span style="font-size:14px;background-color: #c95059;color:white;">加入购物车</span>
                    </div>
                    <div class="btm">
                        <img src="../assets/images/det_sign_1.png" alt="" ><span >{{list_detail.num_1}}</span>
                        <img src="../assets/images/det_sign_2.png" alt="" ><span>{{list_detail.num_2}}</span>
                        <img src="../assets/images/det_sign_3.png" alt="" ><span>{{list_detail.num_3}}</span>
                        <span class="right">精选留言{{list_detail.num_4}} ></span>
                    </div>
                    <div class="com">
                        <img src="../assets/images/det_z_1.png" alt="" style="width:7%;border-radius:50%"><span class="user">{{list_detail.user}}</span>
                        <span class="num">0</span> 
                        <router-link to="/login">
                            <img src="../assets/images/det_z_2.png" alt="" class="num_s">
                        </router-link>
                        <p>{{list_detail.aa}}</p>
                        <p>{{list_detail.date}}</p>
                    </div>
                    <router-link to="/ad_app">
                        <img src="../assets/images/det_ad_1.png" alt="" class="ad_1">
                    </router-link>
                    <router-link to="">
                        <img src="../assets/images/det_ad_2.png" alt="" class="ad_2">
                    </router-link> 
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    methods: {
        getDetails(){
            for(var i in this.$store.state.list){
                if(this.$store.state.list[i].id==this.$route.params.id){
                    return this.$store.state.list[i]
                }
            }
            

        }
    },
    data() {
        return {
            list_detail: this.getDetails(),
        }
    },
}
</script>

<style  scoped>

.header{
    width: 92%;
    padding: 2% 4%;
    position: relative;
}
.a{
    font-size: 12px;
    position: absolute;
    top: 26%;
    left: 12%;
}
.con{
    width: 92%;
    padding: 2% 4%;
    position: relative;
}
.con p{
    font-size: 12px;
}
.cont{
    width: 100%;
    border: 1px solid #e8e8e8;
    padding-left:2% ;
    overflow: hidden;
}
.cont span{
    margin-top: 3%;
    display: inline-block;
}
.cont img{
    width: 50%;
    float: right;
}
.con .btm{
    margin-top: 2%;
    font-size:10px;
    line-height: 10px;
}
.con .btm img{
    width:8% ;
    vertical-align: middle ;
}
.con .btm .right{
    float: right;
    margin-top: 2%;
}
.com{
    margin-top: 5%;
    font-size: 13px;
    position: relative;
    color: gray;
}
.com .user{
    position: absolute;
    top: 5%;
    left: 9%;
}
.com .num{
    position: absolute;
    top: 9%;
    right: 8%;
}
.com .num_s{
    width: 5%;
    position: absolute;
    top: 7%;
    right: 0%;
}
.com p{
    margin: 5% 0%;
}
.ad_1{
    position: fixed;
    width: 16%;
    right: 2%;
    top: 50%;
}
.ad_2{
    width: 16%;
    position: fixed;
    right: 2%;
    top: 70%;
}
</style>