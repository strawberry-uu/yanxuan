<template>
    <main>
        <div class="header" >
            <router-link to="/index">
                <span class="one"> <img src="../assets/images/look_2.png" alt=""></span>
            </router-link>
            <p style="line-height:35px;font-size:16px">
                网易严选
                <span class="two"><img src="../assets/images/look.png" alt=""></span>
            <router-link to="/buycat">
                <span class="thr"><img src="../assets/images/look_1.png" alt=""></span>
            </router-link>
            </p>
        </div>
        <div class="con" style="width:100%">
            <div class="sign">
                <img src="../assets/images/login_1.png" alt="">
            </div>
            <div class="inp">
                <input type="text" placeholder="请输入手机号">
                <input type="text" placeholder="请输入密码">
            </div>
            <div class="a">
                <span class="a_left">忘记密码？</span> 
                <router-link to="/login_ph" style="color:gray">
                    <span class="a_right">短信快捷登录</span>
                </router-link>
            </div>
            <router-link to="/people">
                <button>登录</button>
            </router-link>
            <div style="font-size:12px;margin-top:5%;text-align: center;color:gray">
                <router-link to="/login" style="color:black;text-decoration: none;">其他登录方式 ></router-link>      
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            phone:'',
        }
    },
}
</script>
<style  scoped>
.header {
    width: 100%;
    text-align: center;
    z-index: 100;
    position: fixed;
    overflow: hidden;
    padding: 1%  0%;
    background-color: white;
    border-bottom: 1px solid #F2F5F4;
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
.sign{
    width: 100%;
    text-align: center;
    padding: 22% 0% 12%;
    
}
.sign img{
    width: 40%;
}
input{
    outline: none;
    margin-left: 5%;
    width: 90%;
    padding-bottom:2% ;
    border: none;
    border-bottom: 1px solid #F2F5F4;
}
input:nth-of-type(2){
    margin-top: 10%;
}

.a{
    width: 90%;
    padding: 5%;
    font-size:12px;
    color:gray;
    float: left;
}
.a .a_right{
    float: right;
}
button{
    width: 90%;
    color:white;
    padding: 4% 0%;
    border: none;
    background-color: red;
    margin-left: 7%;
}

</style>