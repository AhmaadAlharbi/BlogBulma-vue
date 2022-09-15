<template>
  <div v-if="showMessage">
    <div class="notification is-success">
      <button @click="hideMessage" class="delete"></button>
      <h1 class="subtitle">The blog has been updated</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: true,
    };
  },
  methods: {
    hideMessage() {
      this.showMessage = false;
    },
  },
};
</script>

<style>
</style>