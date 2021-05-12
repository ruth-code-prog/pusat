<template>
   <div id="app">

    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <button class="rounded">
          <li>
            <router-link to="/">wargaNet</router-link>
          </li>
          </button>
          <button class="rounded">
          <li v-if="!authUser">
            <router-link to="/sign-in">Masuk</router-link>
          </li>
          </button>

          <button class="rounded">
          <li v-if="!authUser">
            <router-link to="/sign-up">Daftar</router-link>
          </li>
          </button>
          <li v-if="authUser">
            <a @click="logout"> Logout</a>
            <a href="#">{{authUser.identifier}}</a>
        </li>
        </ul>
        <ul>
          <li v-if="authUser">
            <button class="rounded" @click="logout">Logout</button>
            <a href="#">{{authUser.identifier}}</a>
          </li>
        </ul>
        <img src="./assets/indonesia.png" style="height: 100px;" class="rounded float-left" alt="">
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      authUser:null
    }
  },
  watch:{
    '$route':'setAuthUser'
  },
  methods:{
    setAuthUser(){
      this.authUser=firebase.auth().currentUser;
    },
    logout(){
      firebase.auth().signOut()
        .then(()=>{
          this.$router.replace('/sign-in')
        })
        .catch((e)=>{
          alert(e.message)
        })
    }
  },
  created(){
    this.setAuthUser();
    // this.authUser=firebase.auth().currentUser;
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
