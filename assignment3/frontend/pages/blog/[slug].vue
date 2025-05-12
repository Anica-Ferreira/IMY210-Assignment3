<!--Anica Ferreira u24581802-->
<template>
    <div v-if="post" class="blog_content">
        <h1>{{ post.title }}</h1>
        <p>{{ post.author }}</p>
        <p>{{ post.published }}</p>
        
        <div class="content" v-html="content"></div>
    </div>
    <div v-else>
        <p>Loading</p>
    </div>

</template>

<script>
import { useBlogStore } from '@/stores/blogStore'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

export default{
    data() {
        return {
            //single post to be rendered
            post: null,
            content: null,
            blogStore: useBlogStore(),
            route: useRoute(),
        }
    },

    async mounted() {
        const slug = this.route.params.slug;

        //fetch posts if needed
        if (this.blogStore.posts.length === 0) {
            await this.blogStore.getAllBlogs();
        }

        //get post by slug
        this.post = this.blogStore.getBlog(slug);

        //render content
        this.content = marked.parse(this.post.content);

    }
}
</script>

<style scoped>

    .blog_content{
        width: 85%;
        background-color: #15222a;
        margin: 0 auto;
        border-radius: 10px;
        margin-bottom: 6em;
        margin-top: 3em;
        padding: 2em;
    }

    .content{
        font-weight: 200;
        margin-top: 3em;
    }

    #cover {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        filter: brightness(0.65);
        opacity: 0.75;
        margin: 0 auto;
        width: 100%;
    }

    h1{
      text-align: center;
      margin-bottom: 1em;
    }

  ::v-deep(.content img) {
      max-width: 100%;
      border-radius: 10px;
      align-content: center;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
      margin-right: auto
  }

  .blog_content p{
      font-weight: 300;
      font-size: 1.1em;     
  }
  
</style>