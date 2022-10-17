<template>
  <h1 class="is-size-1 mt-5">Welcome to BLogBulm</h1>
  <!-- //!! VUEX try to add notification when add a new blog -->
  <div v-if="notification">
    <UpdateNotification />
  </div>
  <div v-if="blogs.length" class="section">
    <div class="container">
      <div class="columns is-flex-wrap-wrap">
        <div class="column is-6" v-for="blog in blogs" :key="blog.id">
          <SingleBlog :blog="blog" @delete="handleDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBlog from "../components/SingleBlog";
import UpdateNotification from "../components/UpdateNotification";
import { projectFirestore } from "../firebase/config";

export default {
  components: { SingleBlog, UpdateNotification },
  data() {
    return {
      blogs: [],
      notification: false,
    };
  },
  async mounted() {
    const res = await projectFirestore.collection("blogs").get();
    this.blogs = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  },
  methods: {
    handleDelete(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
      this.notification = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss">
</style>