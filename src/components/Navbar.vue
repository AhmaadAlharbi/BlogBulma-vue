<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'Home' }">
          Home
        </router-link>
        <router-link class="navbar-item" :to="{ name: 'AddBlog' }">
          Add blog
        </router-link>

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary" :to="{ name: 'Signup' }">
              Signup
            </router-link>
            <router-link class="" :to="{ name: 'Login' }"> Log in </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { projectAuth } from "../firebase/config";

export default {
  data() {
    return {
      isActive: false,
      user: "",
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    projectAuth.onAuthStateChanged((_user) => {
      console.log("User state change. Current user is:", _user);
      user.value = _user;
    });
  },
};
</script>

<style>
</style>