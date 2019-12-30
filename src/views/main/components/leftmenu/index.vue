<script>
import menuList from 'router/routes'


export default {
  data () {
    return {
      menuList: menuList[0].children,
      indexActiv: this.$route.path,
      isMenuShow: false
    }
  },
  methods: {
    renderItem (routerArr) {
      return routerArr.map((routeObj) => {
        const index = routeObj.path
        const title = routeObj.meta.title
        if (routeObj.children){
          return <el-submenu index={index}>
            <template slot="title">{title}</template>
            {this.renderItem(routeObj.children)}
          </el-submenu>
        }else{
          return <el-menu-item index={index} route={routeObj}>{title}</el-menu-item>
        }
      })
    },
    handleMenuLeave () {
       this.isMenuShow = false
    },
    handleMenuBtnClick () {
      this.isMenuShow = true
    }
  },
  render () {
    const { indexActive,menuList,renderItem } = this
    return <div class="menu" on-mouseleave={this.handleMenuLeave}>
      <a class={['menu-btn', this.isMenuShow ? 'hide-menu' : '']} on-click={this.handleMenuBtnClick}>Open</a>
      <el-menu defaultActive={indexActive} router={true} class={['el-menu', this.isMenuShow ? '' : 'hide-menu']} background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
         {renderItem(this.menuList)}
      </el-menu>
    </div>
  }
}


</script>

<style lang="less" scoped>
.menu {
  width: 40px;
}

.el-menu {
    z-index: 2;
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    text-align: center;
    overflow: auto;
    transition: 0.3s;

    &.hide-menu {
      transform: translateX(-300px);
    }
}

.menu-btn {
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
  display: block;
  width: 40px;
  height: 100vh;
  cursor: pointer;
  background-color: #545c64;
  writing-mode: vertical-lr;
  line-height: 40px;
  text-align: center;
  color: white;

  &.hide-menu {
  transform: translateX(-40px);
  }
}
   
</style>