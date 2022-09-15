<template>
  <div class="section px-5">
    <div class="container">
      <h1 class="title has-text-info">Add a new blog</h1>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              class="input"
              :class="{ 'is-danger': titleError }"
              v-model="title"
              type="text"
              placeholder="Say ..."
            />
          </div>
          <p v-if="titleError" class="has-text-danger has-text-left">
            {{ errorMessage }}
          </p>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="what are thinking about?"
              v-model="details"
              :class="{ 'is-danger': detailsError }"
            ></textarea>
            <p v-if="detailsError" class="has-text-danger has-text-left">
              {{ errorMessage }}
            </p>
          </div>
        </div>
        <div class="field">
          <label class="label">Hashtag</label>
          <div class="control">
            <input class="input" v-model="tags" type="text" placeholder="#" />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
      tags: [""],
      titleError: false,
      detailsError: false,
      errorMessage: "This Field must not be empty",
    };
  },
  methods: {
    handleSubmit() {
      if (this.title !== "" && this.details !== "") {
        let blog = {
          id: Math.floor(Math.random() * 1000),
          title: this.title,
          details: this.details,
        };
        fetch("http://localhost:3000/Blgos", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(blog),
        });
        this.$router.push("/");
        this.$emit("done");
      } else {
        this.titleError = true;
        this.detailsError = true;
      }
    },
  },
};
</script>

<style>
</style>