<template>
  <div>
    <Header></Header>
    <div class="mblog">
        <h2>{{blog.title}}</h2>
      <el-link icon="el-icon-edit" v-show="ownBlog">
        <router-link :to="{name:'BlogEdit',params:{blogId:blog.id}}">
          编辑
        </router-link></el-link>
      <el-divider></el-divider>
      <div class="markdown-body" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import "github-markdown-css/github-markdown.css"

export default {
  name: "BlogDetail",
  components: {Header},
  data(){
    return{
      blog:{
        id: '',
        title:'M',
        content:'N'
      },
      ownBlog: false
    }
  },
  created() {
    const blogId = this.$route.params.blogId
    console.log(blogId)
    const _this = this
    if(blogId){
      this.$axios.get('/blog/'+blogId).then(res =>{
        const blog = res.data.data
        _this.blog.id = blog.id
        _this.blog.title = blog.title
        _this.ownBlog = (blog.userId === _this.$store.getters.getUser.id)

        console.log(blog.userId)
        console.log(_this.$store.getters.getUser.id)
        const MarkdownIt = require("markdown-it");
        let md = new MarkdownIt();
        _this.blog.content = md.render(blog.content)
      })
    }
  }
}
</script>

<style scoped>
.mblog{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height:700px;
  padding: 10px 15px;
}
</style>