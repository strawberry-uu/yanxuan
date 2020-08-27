<template>
  <main>
      <div class="header">
            <img src="../assets/images/people_2.webp" alt="">
            <div>
                <img src="../assets/images/people_1.png" alt="">
            </div>
            <span>严选用户9933492...</span><br>
            <i>普通用户</i>
            <b><img src="../assets/images/people_D_1.png" alt=""></b>
      </div>
      <div class="con">
          <p style="font-size:13px">我的资产</p>
          <hr>
          <ul>
              <li v-for="(item,index) in listtop">
                  <p>{{item.con1}}</p>
                  <p>{{item.con2}}</p>
              </li>
          </ul>
      </div>
      <div class="con_1">
          <ul>
              <li v-for="(item,index) in listbot">
                  <img :src="item.src" alt="">
              </li>
          </ul>
      </div>
      <div class="footer">
          <p>退出登录</p>
      </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            listtop:[
                {
                    con1:'￥0',
                    con2:'回馈金'
                },
                {
                    con1:'12',
                    con2:'红包'
                },
                {
                    con1:'2',
                    con2:'优惠卷'
                },
                {
                    con1:'￥0',
                    con2:'津贴'
                },
                {
                    con1:'0',
                    con2:'礼品卡'
                },
            ],
            listbot:[
                {
                    path:'',
                    src:'./src/assets/images/people_L_1.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_2.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_3.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_4.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_5.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_6.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_7.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_8.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_9.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_10.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_11.png'
                },
                {
                    path:'',
                    src:'./src/assets/images/people_L_12.png'
                }
            ]
        }
    },
}
</script>

<style scoped>
main{
    background-color: #ededed;
    margin-bottom: 20%;
}
.header{
    overflow: hidden;
    width: 100%;
    position: relative;
}
.header>img{
    width: 100%;
}
.header div{
    width: 16%;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top:30%;
    left:4%;
}
.header>span{
    position: absolute;
    top:40%;
    left:24%;
    font-size: 12px;
    color: white;
}
.header i{
    position: absolute;
    top:52%;
    left: 24%;
    font-size: 10px;
    color: white;
}
.header b{
    width: 20%;
    position: absolute;
    top: 40%;
    right: 0%;
}
.con{
    overflow: hidden;
    width: 96%;
    padding:5% 2%;
    background-color: #fff;
    margin-bottom: 3%;
}
.con li{
    text-align: center;
    float: left;
    font-size: 12px;
    width: 18%;
    margin-right: 2%;
}
.con_1{
    overflow: hidden;
}
.con_1 li{
    float: left;
    width: 32.66%;
    margin-right: 1%;
}
.con_1 li:nth-of-type(3N){
    margin-right: 0PX;
}
.footer{
    text-align: center;
    width: 100%;
    margin: 5% 0%;
    padding-top:5% ;
    background-color: #fff;
}
</style>