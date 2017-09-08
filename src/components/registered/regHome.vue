<template>
    <div class="reg-home">
        <div class="title">
            <h1>新用户注册</h1>
            <hr>
        </div>
        <img v-lazy="avatar" alt="" class="avatar">
        <div class="content-left">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item>
                    <el-input placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row :gutter="10">
                        <el-col :span="16">
                            <el-input placeholder="请输入验证码"></el-input>
                        </el-col>
                        <el-col :span="7">
                            <el-button type="primary">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入密码，建议6-15位字母与数字组合" style="width:100%;"></el-input>
                </el-form-item>
            </el-form>
             
        </div>
        <div class="content-right"></div>
    </div>
</template>
<script>
var avatar = require('@/assets/logo.png');

export default {
    data(){
        return {
            avatar,
            ruleForm:{

            },
            rules:{},

        }
    }
}
</script>
<style lang="less" scoped>
    @import url('../../pages/style/common.less');
    .reg-home{
        width: 650px;
        height: 450px;
        background: #ebebeb;
        margin: 100px auto 0;
        padding: 25px;
        border-radius: 6px;
        position: relative;
        .content-left{
            width: 350px;
        }
        .content-right{
            width: 160px;
        }
        .avatar{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: -50px;
            transform: translateX(-50%);
        }

    }
</style>
