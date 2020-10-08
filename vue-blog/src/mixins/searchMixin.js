export default { 
    computed: {
        filteredBlogs: function() {
            // filter() returns a new array that passes the condition
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search)
            });
        },
    }
}