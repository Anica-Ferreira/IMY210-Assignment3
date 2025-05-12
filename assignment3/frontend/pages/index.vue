<!--Anica Ferreira u24581802-->
<template>
        <h1>Insight Arcade Blogs</h1>
        <p>Read the most popular blogs for reviews and thoughts on games, board games, movies and more!</p>
    
        <!--Category filter-->
        <div id="filter_container">
            <select v-model="category">
            <option value="all">All Categories</option>
            <option value="Games">Games</option>
            <option value="Board Games">Board Games</option>
            <option value="Movies">Movies</option>
        </select>
        </div>
        
        <!--Blog cards-->
        <div class="blog_container">
            <blogList v-for="post in filteredPosts" :key="post.id" :post="post"/>
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
    h1{
        text-align: center;
        margin-top: 1.5em;
    }

    p{
        text-align: center;
        font-weight: 200;
        font-size: 1em;
        width: 70%;
        margin: 0 auto;
    }

    #filter_container{
        text-align: right;
        max-width: 90%;
        margin-top: 2em;
        margin-bottom: 1em;
    }

</style>