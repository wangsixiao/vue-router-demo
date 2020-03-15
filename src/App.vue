<template>
  <div id="app">
    <router-link to="/home" replace>home</router-link>
    <router-link :to="'/about/'+userid" replace>about</router-link>
    <a @click="linkActiveHandle">person</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'xiaoming'
    }
  },
  methods: {
    linkActiveHandle(){
      // $router是new Router出来的实例，push replace进行路由的跳转
      this.$router.replace("/home")
    }
  }
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
