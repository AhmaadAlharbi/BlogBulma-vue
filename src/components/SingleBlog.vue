<template>
  <div class="card">
    <div class="card-image">
      <!-- <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure> -->
      <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ blog.user }}</p>
          <p class="subtitle is-6">{{ blog.user }}</p>
        </div>
      </div>

      <div class="content">
        <h1>{{ blog.title }}</h1>
        {{ blog.details }}
        <a href="#">#{{ blog.tags }}</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        <i
          @click="deleteBlog"
          class="fa fa-trash mx-2"
          style="font-size: 36px"
        ></i>
        <router-link :to="{ name: 'UpdateBlog', params: { id: blog.id } }">
          <i class="fa fa-edit" style="font-size: 36px"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
  methods: {
    deleteBlog() {
      fetch("http://localhost:3000/Blgos/" + this.blog.id, {
        method: "DELETE",
      }).then(() =>
        this.$emit("delete", this.blog.id).catch((err) =>
          console.log(err.message)
        )
      );
    },
  },
};
</script>

<style>
</style>