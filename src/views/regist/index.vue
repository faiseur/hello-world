<template>
  <div class="wrap">
    <div class="login">
      <div class="username">
        <span class="login-span">用户名:</span><input type="text" placeholder="请输入用户名" />
      </div>
      <div class="password">
        <span class="login-span">密码:</span><input type="password" placeholder="请输入密码" />
      </div>
      <div class="teleponeh">
        <span class="login-span">电话:</span><input type="text" placeholder="请输入电话" />
      </div>
      <div class="sex">
        <span class="login-span">电话:</span><input type="text" placeholder="请输入电话" />
      </div>
    </div>
  </div>
</template>

<script>
// import router from '../../router/map/user'
export default {
  name: 'regist'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    // background-color:seashell;

     .login {
       margin-left: 50%;
       margin-top: 20%;
       width: 400px;
       height: 700px;
       border: 1px solid #ccc;
     }
  }

</style>
