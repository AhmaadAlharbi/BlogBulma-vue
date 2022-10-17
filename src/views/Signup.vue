<template>
  <div class="section container box">
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        class="input mb-3"
        name=""
        id=""
        placeholder="name"
        v-model="name"
        required
      />
      <input
        type="email"
        class="input mb-3"
        placeholder="email"
        v-model="email"
        required
      />
      <input
        type="password"
        class="input mb-3"
        placeholder="password"
        v-model="password1"
        required
      />
      <input
        type="password"
        class="input mb-3"
        placeholder="Confirm password"
        v-model="password2"
        required
      />
      <button class="button is-info">Sign up</button>
    </form>
  </div>
</template>

<script>
import { projectAuth } from "../firebase/config";

export default {
  data() {
    return {
      name: "",
      email: "",
      password1: "",
      password2: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password1 === this.password2) {
        try {
          const res = await projectAuth.createUserWithEmailAndPassword(
            this.email,
            this.password1
          );
          if (!res) {
            throw new Error("Could not complete signup");
          }
          this.$router.push("/");
        } catch (err) {
          console.log(err.message);
          this.error = err.message;
        }
      }
    },
  },
};
</script>

<style>
</style>