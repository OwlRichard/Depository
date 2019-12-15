<template>
  <div id="app">
    <router-link :to="{name: 'first'}">pageA</router-link>
    <router-link to="/about">pageB</router-link>
    <router-view/>
    <!-- 同时展示不同内容，通过name区分 -->
    <router-view name='bob'></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
