<template>
  <div class="wrapper">
    <topBar />
    <leftmenu />
    <div class="content">
      <router-view v-if="isValidPath"/>
      <div v-else class="right">
        <h3>欢迎来到本系统 </h3>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'leftmenu': () => import('./components/leftmenu'),
    'topBar': () => import('./components/topBar')
  },
  mounted () {
    // 登录相关
    const userName = window.localStorage['userName'] ? JSON.parse(window.localStorage['userName']) : null
    const isLogin = !!userName
    if (!isLogin) {
      alert('请登录')
      this.$router.push('login')
    } 
  },
  computed: {
    isValidPath () {
      const res = this.$route.path.match(/\/(?!$)/g)
      return Array.isArray(res) && res.length >= 1
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
}
.content {
  margin-top: 40px;
  width: 100%;
  flex: 1;
  height: 100vh;
  overflow: auto;
}
  
</style>
