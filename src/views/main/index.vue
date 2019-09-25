<template>
  <div class="app-wrapper">
    <div class="main-container">
      <leftmenu />
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    'leftmenu': () => import('./components/leftmenu')
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  display: flex;
}

.main-container {
  flex: 1;
  width: 100%;
  height: 100vh;
}
</style>
