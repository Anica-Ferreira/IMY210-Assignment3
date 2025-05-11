<!--Anica Ferreira u24581802-->
<template>
    <div>
        <h1>Insight Arcade Blogs</h1>
        <p>Read the most popular blogs for reviews and thoughts on games, board games, movies and more!</p>
    
        <!--Category filter-->
        <select v-model="category">
            <option value="all">All Categories</option>
            <option value="Games">Games</option>
            <option value="Board Games">Board Games</option>
            <option value="Movies">Movies</option>
        </select>
        <br><br>
        
        <!--Blog cards-->
        <div class="blog_container">
            <blogList v-for="post in filteredPosts" :key="post.id" :post="post"/>
        </div>

    </div>    
</template>

<script>
import { useBlogStore } from '@/stores/blogStore'
import blogList from '../components/blogList.vue'

export default{
    components: { blogList },

    data(){
        return{
            category: "all",
            blogStore: useBlogStore(),
        }
    },

    computed: {
        filteredPosts(){
            //if no filter applied yet
            if(this.category == "all"){
                return this.blogStore.posts;
            }
            return this.blogStore.posts.filter(
                post => post.category === this.category
            )
        },
    },

    mounted(){
        if (this.blogStore.posts.length === 0) {
                this.blogStore.getAllBlogs();
        }
    }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap'); 

</style>