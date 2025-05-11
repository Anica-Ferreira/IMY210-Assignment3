<!--Anica Ferreira u24581802-->
<template>
    <div>
        <h1>Search Blog Posts</h1>
        <p>Search by blog title or author</p>
        <input type="text" v-model="searchInput" placeholder="Type a blog title or author..." />
        <br><br>

        <div v-if="searchResults.length === 0 && searchInput">
            <p>No results found.</p>
        </div>

        <div v-else class="blog_container">
            <blogList v-for="post in searchResults" :key="post.id" :post="post" />
        </div>
    </div>
    
</template>

<script>
import { useBlogStore } from '@/stores/blogStore'
import blogList from '../components/blogList.vue'

    export default{
        components: { 
            blogList 
        },

        data() {
            return {
                searchInput: "",
                blogStore: useBlogStore(),
            };
        },

        computed: {
            searchResults(){
                const input = this.searchInput.toLowerCase();

                //filter search results
                return this.blogStore.posts.filter((post)=>
                    //sseach by title and author
                    post.title.toLowerCase().includes(input) || post.author.toLowerCase().includes(input)
                );
            }
        },
        
        mounted() {
            if (this.blogStore.posts.length === 0) {
                this.blogStore.getAllBlogs();
            }
        },
    }
</script>

<style scoped>

</style>