<template>
  <div class="navbar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <li class="el-icon-s-home"></li>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/member/">
        <li class="el-icon-user-solid"></li>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier/">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/goods/">
        <i class="el-icon-s-goods"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/staff/">
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.el-menu {
  border-right: none;
}
</style>