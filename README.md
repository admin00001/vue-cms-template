# vue-cms-template

> A cms system base on vue.js which use element-ui mostly.
> Author: <seven> 1412490824@qq.com
## Build Setup

``` bash
# install dependencies
yarn install // 没有yarn? 直接先npm install yarn -g

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
```
### 后台编辑集成了tinymce富文本编辑器
### ui用到了 element-ui, vue 用了全家桶 vue vue-router vuex

## 目录结构
```
-src
  -components // 基础组件
  -config // 配置文件
    -api.js // 存放全部 api路径
  -page //页面级别的路由
  -public // 公共资源文件
    -img // 图片目录
    -js //js文件
    -style // 样式文件
    -icons // 存放一些icons
      -svg // 里面是一些svg文件， svg可以去[iconfont.cn](http://www.iconfont.cn/) 下载，下载之后用编辑器打开这些svg文件， 搜索 fill="#xxxx" 把 fill="#xxxx" 去掉里面的颜色设置变成 fill=""
      index.js // 把./svg目录下的所有的svg 自动导入编译， 依赖svg-sprite-loader这个转换器，具体配置看 build/webpack.base.conf.js
  -router // 路由配置 ，对应的左侧边栏路由可以在src/page/Admin/Admin.vue里面配置
  -store // 全局状态管理
  -static // tinymce 编辑器的一些配置文件，本后台要用到tinymce这个富文本编辑器，引入方式在index.html直接引入 <script src=./static/tinymce/tinymce.min.js ></script>， 然后在src/components/Tinymce/Index.vue自由做一些配置调整

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
