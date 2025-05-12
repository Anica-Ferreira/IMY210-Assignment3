<!--Anica Ferreira u24581802-->

<!--Component to display a single blog post-->
<template>
    <div>
        <NuxtLink  :to="`/blog/${post.slug}`"><img :src="'http://localhost:1337' + post.cover.url" alt="Blog cover image" class="blog_image"></NuxtLink>
    <div>
        <p><strong>By:</strong> {{ post.author }}</p>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content.slice(0, 100) }}...<NuxtLink  :to="`/blog/${post.slug}`"> Read More</NuxtLink></p>
    </div>
    </div>
</template>

<script>

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