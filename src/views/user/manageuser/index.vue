<template>
  <div class="manageuser">
    <div class="header">
      <el-input @keyup.enter.native="handleSearch()" clearable v-model="id" placeholder="请输入ID" class="item"></el-input>
      <el-input @keyup.enter.native="handleSearch()" v-model="userName" placeholder="请输入用户名" class="item"></el-input>
      <el-input @keyup.enter.native="handleSearch()" v-model="telephone" placeholder="请输入电话" class="item"></el-input>
      <el-button @click="handleSearch" type="primary">搜索</el-button>
      <el-button @click="reset" type="primary">重置</el-button>
    </div>
    <div class="content">
      <el-table :data="dataList" style="width: 100%">
        <el-table-column  prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="userName" label="姓名" width="180"></el-table-column>
        <el-table-column prop="sex" label="性别" width="180"></el-table-column>
        <el-table-column prop="telephone" label="电话"></el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 25, 30]"
        :page-size="pageSize"
        :total="totalCount"
        :page-count="pageCount"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</template>

<script>
import { getUserList } from '../../../api'
// import axios from 'axios'


export default {
  data () {
    return {
      input: '',
      dataList: [],
      id: this.id,
      telephone: this.phone,
      userName: this.userName,
      sex: this.sex,
      getUserList,
      // 分页
      pageSize: 10,
      currentPage: 1,
      pageCount: 1,
      totalCount: 0
    }
  },
  mounted () {
     this.userList()
  },
  methods: {
    userList () {
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      params.id = this.id
      params.username = this.userName
      params.sex = this.sex
      params.telephone = this.telephone
      this.getUserList(params).then((res) => {
        if (res.data) {
          const { data: items , currentPage = 1 ,pageCount = 1,totalCount = 0} = res.data.data
          this.dataList = items
          this.pageCount = pageCount
          this.totalCount = totalCount
        }
      }).catch(err => {
        // this.$message.error(err)
        })
    },
    // 改变每页条数
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
      this.userList()
    },
    // 翻页
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      this.userList()
    },
    // 搜索用户
    handleSearch () {
      this.currentPage = 1,
      this.userList()
    },
    // 重置搜索信息
    reset () {
       this.id = null
       this.username = null
       this.sex = null
       this.telephone = null
       this.userList
    }
  }
}
</script>

<style lang="less" scoped>
  .manageuser {
    margin-left: 20px;

    .header {
      height: 60px;
      border-bottom: 1px solid #ccc;
      padding: 30px 0;
      

      .item {
        width: 180px;
        margin-right: 20px;
      }
    }

    .pagination {
      float: right;
      height: 70px;
      margin-top: 30px;
    }
  }
</style>