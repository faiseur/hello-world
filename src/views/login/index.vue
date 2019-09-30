<template>
  <div class="wrap">
    <div class="login">
      <div class="login-item username">
        <span class="login-span">用户名:</span><input class="login-input" type="text" placeholder="请输入用户名" v-model="userName" />
      </div>
      <div class="login-item password">
        <span class="login-span">密&nbsp;&nbsp;&nbsp;码:</span><input class="login-input" type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="login-regist">
        <el-button class="login-btn" @click="submit">登录</el-button>
        <el-button class="regist-btn" @click="regist">注册</el-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { getUser } from '../../api'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      userName: this.userName,
      password: this.password,
      getUser
    }
  },
  mounted () {
    // 登录相关
    const userName = window.localStorage['userName'] ? JSON.parse(window.localStorage['userName']) : null
    const isLogin = !!userName
    if (isLogin) {
      alert('您已登录')
      this.$router.push('/')
    } 
  },
  methods: {
    submit () {
        const params = {
          userName: this.userName,
          password: this.password
        }
        axios.post(`http://192.168.222.218:18888/admin/user/getUser?userName=${this.userName}&password=${this.password}`)
        // this.getUser(params)
        .then((res) => {
          window.localStorage.setItem('userName',this.userName);
          this.$router.push('/')
        })
    },
      regist () {
        this.$router.push('regist')
        console.log(123)
      }
  }
  

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
       height: 300px;
       padding-top: 30px;
       border: 1px solid #ccc;

       .login-item {
         height: 60px;
         margin-left: 50px;
         line-height: 60px;

         .login-span {
           display: inline-block;
           width: 80px;
         }

         .login-input {
            height: 30px;;
         }
       }
     }

     .login-regist {
       width: 100%;
       text-align: center;
       margin-top: 30px;
     }

  }

</style>
