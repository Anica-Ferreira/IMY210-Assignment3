<!--Anica Ferreira u24581802-->
<template>
    <div>
        <h1>Search Blog Posts</h1>
        <p>Search by blog title or author</p>
        <input type="text" v-model="searchInput" placeholder="Type a blog title or author..." @input="search"/>
    </div>
    
</template>

<script>
    export default{
        data() {
            return {
                searchInput: ""
            };
        },

        methods: {
            search(){

            }
        }
    }
</script>

<style scoped>

</style>