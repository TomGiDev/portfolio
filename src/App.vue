<template>
  <div id="app" class="bg-dark">
      <top-navbar></top-navbar>
    <router-view/>
  </div>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";

  export default {
    components: {
      "top-navbar": TopNavbar
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  text-align: center;
  color: #7ba5cf;
}

#nav {
  padding: 20px;
  border-bottom: thin solid #e28229;
}

#nav a {
  font-weight: bold;
  font-size: 20px;
  color: #7ba5cf;
  margin: 0px 20px;
}

#nav a.router-link-exact-active {
  color: #e28229;
}
</style>
