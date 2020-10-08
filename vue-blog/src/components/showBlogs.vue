<template>
  <div v-theme:column="'narrow'" id='show-blogs'>
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="Search Blogs" />

      <div 
        v-for="(blog, index) in filteredBlogs" 
        :key="index" 
        class="single-blog"
      >
          <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search: '',
        }
    },
    // Lifecycle hook fires when the component is first made
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                console.log(data);
                this.blogs = data.body.slice(0, 10);
            })
    },
    computed: {
        filteredBlogs: function() {
            // filter() returns a new array that passes the condition
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search)
            })
        },
    }
}
</script>

<style>
    #show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>
