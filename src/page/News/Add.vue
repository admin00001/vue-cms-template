<template>
  <div class="add-news">
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>CMS管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加新闻</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'add-news'
  }
</script>
<style scoped lang="stylus"></style>
