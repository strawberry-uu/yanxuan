<template >
    <main>
        <router-view></router-view>
        <ol>
            <li v-for='(item,index) in listbot'>
                <router-link :to='item.path'>
                    <img :src='item.src' alt="" class="pic">
                    <img :src='item.src_s' alt="" class="active">
                </router-link>
            </li>    
        </ol>
    </main>
</template>

<script >
    export default{
        data(){
            return{
               
                listbot:[
                    {
                        con:'首页',
                        path:'/index',
                        src:'./src/assets/images/h1.png',
                        src_s:'./src/assets/images/h1_s.png'
                    },
                    {
                        con:'分类',
                        path:'/type',
                        src:'./src/assets/images/h2.png',
                        src_s:'./src/assets/images/h2_s.png'
                    },
                    {
                        con:'值得买',
                        path:'/buy',
                        src:'./src/assets/images/h3.png',
                        src_s:'./src/assets/images/h3_s.png'
                    },
                    {
                        con:'购物车',
                        path:'/buycat',
                        src:'./src/assets/images/h4.png',
                        src_s:'./src/assets/images/h4_s.png'
                    },
                    {
                        con:'个人',
                        path:'/people',
                        src:'./src/assets/images/h5.png',
                        src_s:'./src/assets/images/h5_s.png'
                    },
                ]
            }
        }
    }
</script>

<style >

ol{
    width:100%;
    position: fixed;
    bottom: 0%;
    left: 0px;
    border-top:1px solid gray;
    background-color: white;
}
ol li{
    width:13%;
    float:left;
    margin-left: 6%;
}
img{
    width:100%
}
.pic{
    display: inline-block;
}
.active{
    display: none;
}
.router-link-active .pic{
    display: none;
}
.router-link-active .active{
    display: inline-block;
}
</style>