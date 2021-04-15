<template>
  <Header v-bind:user="user"></Header>
  <router-view v-bind:user="user"></router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = localStorage.getItem("username");
  },
};
</script>

<style>
body {
  background: fixed linear-gradient(45deg, #FC466B, #3F5EFB);
    overflow-x: hidden;
    background-repeat: no-repeat;
}
#app {
    font-family: arial, sans-serif;
    color: rgb(15, 12, 12);
}
</style>
