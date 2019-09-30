<template>
  <div class="topbar">
    <el-dropdown  class="username" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: 'topBar',
  data () {
     return {
       username: ''
     }
  },
  beforeMount () {
    this.username = window.localStorage.getItem('userName')
  },
  methods: {
    handleCommand (command) {
      this[command]()
    },
    logout () {
      window.localStorage.removeItem('userName')
      this.$router.push('login')
      console.log(222)
    }
  }
}
</script>

<style lang="less" scoped>
.topbar {
  width: 100%;
  margin-left: 40px;
  height: 50px;
  border-bottom: 1px solid #ccc;

  .username {
    float: right;
    width: 100px;
    height: 100%;
    line-height: 50px;
    text-align: center;
  }

  .el-dropdown-link {
    display: inline-block;
    width: 60px;
    height: 50px;
    color: #409eff;
    cursor: pointer;
    // border: 1px solid #409eff;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
}

</style>