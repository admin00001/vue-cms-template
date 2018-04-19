<template>
  <div class="admin">
    <el-header class="header clearfix">
      <div class="name fl animate" :class="{collapse: isCollapse}">
        vue-cms <span v-show="!isCollapse">后台系统</span>
      </div>
      <div class="right-content fl">
        <div class="switch-wrapper" :class="{collapse: isCollapse}" @click="isCollapse = !isCollapse">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </div>
      </div>
      <div class="fr">
        <el-dropdown trigger="click" v-if="username" class="username">
          <span class="el-dropdown-link">
            {{username}} <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logOut">
              <icon icon-class="log-out"/>
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <aside class="aside animate" :class="{collapse: isCollapse}">
      <el-menu :collapse="isCollapse"
               unique-opened
               router
               background-color="#545c64"
               style="border-color:#545c64"
               text-color="#fff"
               :default-active="$route.path"
               active-text-color="#ffd04b">
        <el-menu-item index="/">
          <icon icon-class="home"/>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="/cms">
          <template slot="title">
            <icon icon-class="cms"/>
            <span slot="title">cms管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">新闻中心</span>
            <el-menu-item index="/news">新闻列表</el-menu-item>
            <el-menu-item index="/news/add">添加新闻</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </aside>

    <el-main class="main-container animate" :class="{collapse: isCollapse}">
      <router-view/>
    </el-main>
  </div>
</template>

<script type="text/ecmascript-6">
  import {logOutUrl} from 'config/api'

  export default {
    name: 'admin',
    data() {
      return {
        isCollapse: false
      }
    },
    computed: {
      username: function () {
        return this.$store.state.userInfo.strEmail || ''
      }
    },
    methods: {
      async logOut() {
        try {
          await this.$ajax.get(logOutUrl)
          this.$router.push('/login')
        } catch (err) {
          this.$message.error('退出失败')
          console.error(err)
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
  .header
    position fixed
    top 0
    left 0
    width 100%
    height 60px
    background-color #545c64
    color #fff
    font-size 20px
    line-height 60px
    z-index 90
    overflow hidden
    .name
      width 220px
      font-weight 700
      &.collapse
        font-size 14px
        width 64px
    .right-content
      .switch-wrapper
        position relative
        display inline-block
        vertical-align middle
        width 26px
        height 20px
        cursor pointer
        transition 500ms
        &.collapse
          transform rotateZ(-180deg) scale(.8)
        &:hover .line
          background-color #ffd04b
        .line
          position absolute
          left 0
          width 100%
          height 2px
          background-color #fff
          &.top
            top 0
          &.middle
            top 50%
            margin-top -1px
          &.bottom
            bottom 0
    .username
      display block
      color #fff
      cursor pointer
      &:hover
        color #ffd04b

  .aside
    position fixed
    top 0
    left 0
    padding-top 60px
    height 100%
    width 220px
    background-color #545c64
    z-index 50
    overflow-y auto
    &.collapse
      width auto

  .main-container
    margin-top 60px
    margin-left 220px
    &.collapse
      margin-left 64px
</style>
