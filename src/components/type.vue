<template>
  <main style="background-color:#ededed;">
    <div class="header" >
        <input type="text" placeholder="搜索商品，共36085款好物" class="a">
    </div>
    
    <div class="cont">
        <div class="bck"></div>
        <ul class="cont_left">
            <li v-for="(item,index) in list_left" :class="{current:index==num}" @click="num=index">
                <p>{{item.con}}</p>
            </li>
        </ul>
        <ul class="cont_right">
            <li v-for="(item,index) in list_left[num].right" class="cont_right_1">
                <img :src="item.src" alt="">
                <ul v-for="(item,index) in item.list_o" class="cont_right_1_1">
                    <li style="font-size:12px;margin-left:2%;border-bottom:1px solid #d9d9d9;padding-bottom:2%">{{item.tiltle}}</li>
                    <br>
                    <li v-for="(item,index) in item.list_o_o" class="cont_right_1_1_1">
                        <div>
                            <img :src="item.src1" alt="">
                            <p>{{item.a}}</p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    
    </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            selected:'1',
            num:0,
            list_left:[
                {
                    con:'推荐专区',
                    right:[
                        {
                            src:'./src/assets/images/type_1.webp',
                            list_o:[
                                {
                                    tiltle:'',
                                    list_o_o:[
                                        {
                                            src1:'./src/assets/images/type_2.webp',
                                            a:'员工精选'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3.webp',
                                            a:'人气好物'
                                        },
                                        {
                                            src1:'./src/assets/images/type_4.webp',
                                            a:'满2件享3折'
                                        },
                                        {
                                            src1:'./src/assets/images/type_11.webp',
                                            a:'消暑美食'
                                        },
                                        {
                                            src1:'./src/assets/images/type_6.webp',
                                            a:'防晒好物'
                                        },
                                        {
                                            src1:'./src/assets/images/type_7.webp',
                                            a:'回购好物'
                                        },
                                        {
                                            src1:'./src/assets/images/type_8.webp',
                                            a:'清凉伴侣'
                                        },
                                        {
                                            src1:'./src/assets/images/type_9.webp',
                                            a:'99专区'
                                        },
                                        {
                                            src1:'./src/assets/images/type_10.webp',
                                            a:'浙江制造'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    con:'新品专区',
                    right:[
                        {
                            src:'./src/assets/images/type_1_1.webp',
                            list_o:[
                                {
                                    tiltle:'',
                                    list_o_o:[
                                        {
                                            src1:'./src/assets/images/type_2_1.webp',
                                            a:'居家生活新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_3.webp',
                                            a:'服饰鞋包新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_5.webp',
                                            a:'美食酒水新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_6.webp',
                                            a:'个护清理新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_7.webp',
                                            a:'运动旅行新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_8.webp',
                                            a:'母婴亲子新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_9.webp',
                                            a:'数码家电新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_2_10.webp',
                                            a:'全球特色新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_8.webp',
                                            a:'员工精选新品'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    con:'居家生活',
                    right:[
                        {
                            src:'./src/assets/images/type_3_1.webp',
                            list_o:[
                                {
                                    tiltle:'口碑好物',
                                    list_o_o:[
                                        {
                                            src1:'./src/assets/images/type_3_2.webp',
                                            a:'居家生活新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_3.webp',
                                            a:'服饰鞋包新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_4.webp',
                                            a:'美食酒水新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_5.webp',
                                            a:'个护清理新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_6.webp',
                                            a:'运动旅行新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_7.webp',
                                            a:'母婴亲子新品'
                                        }
                                    ]
                                },
                                {
                                    tiltle:'床上用品',
                                    list_o_o:[
                                        {
                                            src1:'./src/assets/images/type_3_8.webp',
                                            a:'居家生活新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_9.webp',
                                            a:'服饰鞋包新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_10.webp',
                                            a:'美食酒水新品'
                                        }
                                    ],
                                },
                                {
                                    tiltle:'家具套装',
                                    list_o_o:[
                                        {
                                            src1:'./src/assets/images/type_3_2.webp',
                                            a:'居家生活新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_3.webp',
                                            a:'服饰鞋包新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_4.webp',
                                            a:'美食酒水新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_5.webp',
                                            a:'个护清理新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_6.webp',
                                            a:'运动旅行新品'
                                        },
                                        {
                                            src1:'./src/assets/images/type_3_7.webp',
                                            a:'母婴亲子新品'
                                        }
                                    ],
                                }
                            ]
                        }
                    ]
                },
                {
                    con:'服饰鞋包'
                },
                {
                    con:'美食酒水'
                },
                {
                    con:'个护清理'
                },
                {
                    con:'母婴亲子'
                },
                {
                    con:'运动旅行'
                },
                {
                    con:'数码家电'
                },
                {
                    con:'严选全球'
                }
            ],
        } 
    },
}
</script>

<style scoped>
.header{
    position: fixed;
    top: 0%;
    text-align: center ;
    width: 100%;
    background-color: white;
    padding: 2% 0%;
}
.header input{
    width: 80%;
    text-align: center;
    background-color: #ededed;
    border: none;
    border-radius: 12px;
    font-size: 12px;
}
.bck{
    width: 100%;
    background-color:#ededed;
    height: 5px;
}
.cont{
    margin-top: 12%;
    width: 100%;
    overflow: hidden;
    margin-bottom: 14%;
}
.cont>ul{
    float: right;
}
.cont .cont_left{
    font-size: 12px;
    width: 22%;
    margin-right: 2%;
    background-color: white;
    position: fixed;
}
.cont_left li{
    width: 100%;
    text-align: center;
    margin: 30% 0%;
}
.cont .cont_right{
    width: 76%;
    background-color: white;
    overflow: auto;
    
}
.con{
    overflow: hidden;
    position: fixed;
    top: 6%;
    width: 100%;
}
.cont_right_1{
    width: 100%;
}
.cont_right_1>img{
    width: 100%;
}
.cont_right_1_1{
    overflow: hidden;
    margin-top: 4%;
}
.cont_right_1_1_1 div{
    text-align: center;
    float: left;
    font-size: 10px;
    width: 25%;
    margin-left: 6%;
    margin-bottom: 4%;
    color: grey;
}
.current{
    color: red;
}
</style>