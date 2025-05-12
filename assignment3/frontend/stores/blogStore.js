//Anica Ferreira u24581802
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        posts: [],
    }),

    getters:{
        //get single blog by slug id
        getBlog: (state) => (slug) => {
            return state.posts.find((post) => post.slug === slug);
        },        
    },

    actions: {
        async getAllBlogs(){
            if (this.posts.length > 0){
                return;
            } 
            try {
                const res = await fetch("http://localhost:1337/api/blog-posts?populate=*");
                const data = await res.json();
                this.posts = data.data;

                console.log(this.posts);

            } catch (err) {
                console.log(err);
            }
        }    
    }
});