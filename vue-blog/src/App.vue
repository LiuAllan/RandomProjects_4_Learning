<template>
  <div id="app">
    <!-- <addBlog /> -->
    <!-- <showBlogs /> -->
    <!-- <listBlogs /> -->
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
// import showBlogs from './components/showBlogs.vue';
// import listBlogs from './components/listBlogs.vue';
import Header from './components/header.vue';

export default {
  name: 'App',
  components: {
    // addBlog,
    // showBlogs,
    // listBlogs,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
