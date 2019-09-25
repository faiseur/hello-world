<template>
 <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      router
      :default-active="this.$router.path"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user/login">
          <template slot="title">用户列表</template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-for="(item,i) in list" :key="i" :index="item.name">
        {{ item.title }}
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>
const list = [
  {
    name: '/login',
    title: '登陆'
  },
  {
    name: '/regist',
    title: '注册'
  }
]


export default {

  data () {
    return {
      list
    }
  },
  methods: {
      handleOpen(key,keyPath) {
        alert(key,keyPath)
        // this.$router.push('/user/login')
      },
      handleClose(key,keyPath) {
        alert(key,keyPath)
      }
    }
}
</script>

<style lang="less" scoped>
  .sidebar {
    width: 100%;
    height: 100vh;
    background: #000;

    .el-menu-vertical-demo {
      // height: 1000px;
      width: 300px;
    }
  }
</style>