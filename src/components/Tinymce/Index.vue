<template>
  <div class="tinymce-container editor-container">
    <textarea class="tinymce-textarea" :id="tinymceId"></textarea>
    <div class="editor-custom-btn-container">
      <el-upload
        class="upload"
        ref="upload"
        with-credentials
        :data="{mod: 'cms'}"
        :action="uploadImgOriginalUrl"
        :on-success="changeEditorImgUrl"
        :on-error="uploadErrorHandle"
        :show-file-list="false">
        <el-button size="small" type="primary" icon="picture">
          上传本地图片<i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
  import plugins from './plugins'
  import toolbar from './toolbar'
  import {uploadImgOriginalUrl, IMG_DOMAIN} from 'config/api'

  const ERR_OK = 0

  export default {
    name: 'tinymce',
    props: {
      id: {
        type: String
      },
      value: {
        type: String,
        default: ''
      },
      toolbar: {
        type: Array,
        required: false,
        default() {
          return []
        }
      },
      menubar: {
        default: 'file edit insert view format table'
      },
      height: {
        type: Number,
        required: false,
        default: 360
      }
    },
    data() {
      return {
        uploadImgOriginalUrl,
        hasChange: false,
        hasInit: false,
        tinymceId: this.id || 'vue-tinymce-' + +new Date()
      }
    },
    watch: {
      value(val) {
        if (!this.hasChange && this.hasInit) {
          this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val))
        }
      }
    },
    mounted() {
      this.initTinymce()
    },
    activated() {
      this.initTinymce()
    },
    deactivated() {
      this.destroyTinymce()
    },
    methods: {
      initTinymce() {
        window.tinymce.init({
          selector: `#${this.tinymceId}`,
          height: this.height,
          language: 'zh_CN',
          theme: 'modern',
          branding: false,
          object_resizing: false,
          toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
          menubar: this.menubar,
          plugins,
          end_container_on_empty_block: true,
          powerpaste_word_import: 'clean',
          code_dialog_height: 450,
          code_dialog_width: 900,
          advlist_bullet_styles: 'square',
          advlist_number_styles: 'default',
          imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
          default_link_target: '_blank',
          link_title: false,
          init_instance_callback: editor => {
            if (this.value) {
              editor.setContent(this.value)
            }
            this.hasInit = true
            editor.on('NodeChange Change KeyUp SetContent', () => {
              this.hasChange = true
              // this.$emit('input', editor.getContent())
              this.$emit('input', editor.getBody().innerHTML)
            })
          }
        })
      },
      destroyTinymce() {
        let editor = window.tinymce.get(this.tinymceId)
        editor && editor.destroy()
      },
      setContent(value) {
        window.tinymce.get(this.tinymceId).setContent(value)
      },
      getContent() {
        window.tinymce.get(this.tinymceId).getContent()
      },
      changeEditorImgUrl(response) {
        console.log(response)
        if (response.code === ERR_OK) {
          window.tinymce.get(this.tinymceId).insertContent(`<img class="img-responsive wscnph" src="${IMG_DOMAIN}${response.data}">`)
          this.$message.success('图片上传成功')
        } else {
          this.$message.error('图片上传失败，请重新上传！')
        }
      },
      uploadErrorHandle(err, file, fileList) {
        console.log(err)
        console.log(file)
        console.log(fileList)
        this.$message.error('上传失败！')
      }
    },
    destroyed() {
      this.destroyTinymce()
    }
  }
</script>

<style scoped>
  .tinymce-container {
    position: relative;
  }

  .tinymce-container > > > .mce-fullscreen {
    z-index: 10000;
  }

  .tinymce-textarea {
    visibility: hidden;
    z-index: -1;
  }

  .editor-custom-btn-container {
    position: absolute;
    line-height: 34px;
    right: 0;
    top: 0;
  }
</style>
