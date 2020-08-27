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
        <div class="con">
            <div class="sign">
                <img src="../assets/images/login_1.png" alt="">
            </div>
            <div class="cho">
                <router-link to="/login_ph">
                    <button class="ph">手机号快捷登录</button>
                </router-link>
                <router-link to="/login_em">
                    <button class="em">邮箱账号登录</button>
                </router-link>
            </div>
            <div class="btm">
                <img src="../assets/images/login_b_1.png" alt="">
            </div>
        </div>   
    </main>
</template>
<script>
export default {
    
}
</script>

<style  scoped>
main{
    background-color: #F2F5F4;
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

.sign{
    width: 100%;
    text-align: center;
    padding: 30% 0%;
}
.sign img{
    width: 30%;
}
.cho{
    width: 100%;
}
.con .ph{
    width:90%;
    border:none;
    background-color: red;
    color: white;
    padding: 3% 0%;
    border-radius: 5px;
    margin-left: 5%;
    outline: none;
}
.con .em{
    width:90%;
    border:none;
    padding: 3% 0%;
    background-color: #F2F5F4;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    margin: 5% 5%;
    outline: none;
}
.btm{
    width: 100%;
    text-align: center;
}
.btm img{
    width: 60%;
    margin-top:50% ;
    margin-bottom: 20%;
}
</style>