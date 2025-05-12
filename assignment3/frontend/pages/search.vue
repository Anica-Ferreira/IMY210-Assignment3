<!--Anica Ferreira u24581802-->
<template>
    <div>
        <h1>Search Blog Posts</h1>
        <p>Search by blog title or author</p>
        <div id="search_container">
            <input type="text" v-model="searchInput" placeholder="Type a blog title or author..." />
        </div>
        <br><br>

        <div v-if="searchResults.length === 0 && searchInput">
            <h2>No results found.</h2>
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

    h2{
        text-align: center;
        font-weight: 200;
        margin-bottom: 5em;
    }

    #search_container{
        text-align: center;
        max-width: 100%;
        margin-top: 2em;
        margin-bottom: 1em;
    }

    input{
        font-family: 'Poppins';
        font-size: 1em;
        padding: 0.5em ;
        border-radius: 5px;
        background-color: #edf8ff;
        width: 20em;
        color: #0b1317;
    }

    input:focus{
        outline: 2px #34bcae solid;
    }

    
</style>