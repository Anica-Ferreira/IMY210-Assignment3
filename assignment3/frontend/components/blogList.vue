<!--Anica Ferreira u24581802-->

<!--Component to display a single blog post-->
<template>
    <NuxtLink  :to="`/blog/${post.slug}`"><img :src="'http://localhost:1337' + post.cover.url" alt="Blog cover image" class="blog_image" width="500"></NuxtLink>
    <h2>{{ post.title }}</h2>
    <p><strong>By:</strong> {{ post.author }}</p>
    <p>{{ post.content.slice(0, 100) }}...<NuxtLink  :to="`/blog/${post.slug}`">Read More</NuxtLink></p>
</template>

<script>
    import { useBlogStore } from '@/stores/blogStore'

    export default{
        name: 'BlogSnippet',

        props: {
            post: {
                type: Object,
                required: true,
            },
        },    
    };

</script>