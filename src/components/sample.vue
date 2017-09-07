<template>
    <div class="sample" :style="{height: height + 'px',width:width+ 'px'}">
        <img v-lazy="imgUrl" alt="" :style="{width: width + 'px', height: height * 200/350 + 'px' }">
        <div class="content" :style="{width: width-20 + 'px',height: height * 89/350 +'px'}">
            <span>{{name}}</span>
            <p class="sales">
                <img v-lazy="imgUrl" alt="">
                <span style="color:#ff165d">{{price}}</span><span>/次</span><span>销售{{sales}}件</span>
            </p>
        </div>
        <div class="author" :style="{width: width-20 + 'px',height: height * 60/350 + 'px'}">
            <img class="avatar" v-lazy="avatar" alt="">
            <div>{{authorName}}</div>
            <img v-lazy="avatar" alt="" class="authorGrade">
        </div>
    </div>
</template>
<script>
var VueLogo = require('@/assets/logo.png');
export default {
    props:{
        // sample's height
        height: {
            type: Number,
            default: 350,
        },
        // sample's width
        width: {
            type: Number,
            default: 280,
        },
        // sample's image URL
        imgUrl: {
            type: String,
            default: VueLogo,
        },
        // sample's name
        name: {
            type: String,
            default: '民族风短袖公主裙'
        },
        // sample's price
        price: {
            type: String,
            default: '5.00元'
        },
        // sample's sales
        sales: {
            type: Number,
            default: 18
        },
        // sample's autor avatar
        avatar: {
            type: String,
            default: VueLogo
        },
        // authorName
        authorName:{
            type: String,
            default: '姚老师'
        },
        authorStatus: {
            type: Number,
            default: 1
        },
    },
    data() {
        return {
        }
    },
    created(){
    }
}
</script>
<style lang="less" scoped>
    .sample{
        border: 1px solid #000;
    }
    .author{
        border-top: 1px solid #000;
        padding: 0 10px;
        display: flex;
        align-items: center;
        position: relative;
        // justify-content: space-between;
        font-size: 12px;
        .avatar{
            height: 36px;
            width: 36px;
            margin-right: 10px;
            border-radius: 50%;
        }
        .authorGrade{
            height: 36px;
            width: 36px;
            position: absolute;
            right: 10px;
        }
    }
    .content{
        font: 14px;
        padding: 0 10px;
    }
    .sales{
        img{
            width: 21px;
            height: 21px;
            display: block;
            float: left;
        }
        span:last-child{
            float: right;
        }
        color: #666;
    }
</style>
