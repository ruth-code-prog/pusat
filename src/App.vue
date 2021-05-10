<template>
   <div id="app">

    <div class="navbar">
      <ul class="nav navbar-nav">

        <li>
           <router-link to="/">VueFire</router-link>
        </li>
        <li v-if="!authUser">
          <router-link to="/sign-in">SignIn</router-link>
        </li>

        <li v-if="!authUser">
          <router-link to="/sign-up">SignUp</router-link>
        </li>

        <li v-if="authUser">
          <a @click="logout"> Logout</a>
          <a href="#">{{authUser.identifier}}</a>

       </li>
      </ul>


    </div>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
}
</style>
