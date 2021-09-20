<template>
  <div id="app" class="bg-dark">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/work">Work</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
