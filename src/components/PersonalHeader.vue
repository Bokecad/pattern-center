<template>
<div class="header">
    <div>
        
    </div>
    <div class="navi">
        <div class="wrap2">
            <el-row>
                <el-col :span="8">
                        <el-input icon="gengduo"></el-input>
                        
                </el-col>
                <el-col :span="16">
                    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1" activeIndex2>纸样中心</el-menu-item>
                            <el-menu-item index="2">名师专区</el-menu-item>
                            <el-menu-item index="3">视频教学</el-menu-item>
                            <el-menu-item index="4">免费制版</el-menu-item>
                            <el-menu-item index="5">企业服务</el-menu-item>
                            <el-menu-item index="6">关于我们 </el-menu-item>
                        </el-menu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
    </div>
    
    <div>

    </div>
</div>





</template>




<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>






<style lang="less" scoped>
@import url('../pages/style/common.less');
@import url("//at.alicdn.com/t/font_410039_wifgm6dlieqdj9k9.css");
.wrap2{width:1200px;margin:0 auto;}
.navi{
    padding:30px 0px;
    background: @bg-white; 
    box-shadow: 0px 8px 8px #eee;
    margin-bottom: 10px;
    font-size: @fz-title;
    .el-menu--dark{
        background: @bg-white; 
    }
    .el-menu{background: @bg-white;}
    .el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
       border-bottom: 2px solid @bg-focus;
    }
    .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
        color:@f-dark1;
        border-bottom: 2px solid @bg-focus;
    }
    .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover{
        background-color:@bg-white;
    }
}




</style>

