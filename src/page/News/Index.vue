<template>
  <div class="news">
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>CMS管理</el-breadcrumb-item>
        <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'news'
  }
</script>

<style scoped lang="stylus">

</style>
