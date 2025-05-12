<!--Anica Ferreira u24581802-->
<template>
  <div id="top">
        <nav>
            <div id="logo_container">
                <NuxtLink to="/">
                    <img id="logo" src="assets/logo.svg">
                </NuxtLink>
            </div>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/search">Search Blogs</NuxtLink></li>
            </ul>
        </nav>
        <NuxtPage />
        <footer>
            <p>Return to <a href="#top">top</a></p>
            <p>&copy; 2025 Insight Arcade  All rights reserved.</p>
        </footer>
    </div>
</template>