<template>
  <h1>Blogs</h1>
  <!-- //!! VUEX try to add notification when add a new blog -->
  <!-- <AddNotification /> -->
  <div v-if="blogs.length > 0" class="section">
    <div class="container">
      <div class="columns is-flex-wrap-wrap">
        <div class="column is-6" v-for="blog in blogs" :key="blog.id">
          <SingleBlog :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBlog from "./SingleBlog.vue";
import AddNotification from "./addNotification.vue";
export default {
  components: { SingleBlog, AddNotification },
  data() {
    return {
      blogs: [""],
    };
  },
  async mounted() {
    fetch("http://localhost:3000/Blgos")
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>