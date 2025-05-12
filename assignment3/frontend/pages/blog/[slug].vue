<!--Anica Ferreira u24581802-->
<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.author }}</p>
        <p>{{ post.published }}</p>
        <img :src="'http://localhost:1337' + post.cover.url" alt="Blog cover image" >
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