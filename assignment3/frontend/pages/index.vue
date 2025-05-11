<!--Anica Ferreira u24581802-->
<template>
    <div>
        <h1>Insight Arcade Blogs</h1>
        <p>Read the most popular blogs for reviews and thoughts on games, board games, movies and more!</p>
    
        <!--Category filter-->
        <select v-model="category">
            <option value="all">All Categories</option>
            <option value="Games">Games</option>
            <option value="board-games">Board Games</option>
            <option value="movies">Movies</option>
            <option value="tech">Tech</option>
        </select>
        <br><br>
        
        <!--Blog cards-->
        <div class="blog_container">
            <div v-for="post in filteredPosts" :key="post.id" class="blog_post">
                <blogList v-for="post in filteredPosts" :key="post.id" :post="post"/>
            </div>
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
        this.blogStore.getAllBlogs();
    }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap'); 

</style>