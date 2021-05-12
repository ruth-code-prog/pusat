<template>
   <div id="app">

    <nav class="navbar fixed-top navbar navbar-dark bg-info navbar-expand">
      <div class="container-fluid">
        <ul class="navbar-nav nav-justified w-100 h-75">
          <button class="rounded">
            <router-link to="/">wargaNet</router-link>
          </button>
          <button class="rounded" v-if="!authUser">
            <router-link to="/sign-in">Masuk</router-link>
          </button>
          <button class="rounded" v-if="!authUser">
            <router-link to="/sign-up">Daftar</router-link>
          </button>
          <button v-if="authUser" class="rounded" @click="logout">Logout
            <a href="#">{{authUser.identifier}}</a>
          </button>
        </ul>
        <img src="./assets/indonesia.png" style="height: 80px;" class="rounded float-left" alt="">
      </div>
    </nav>
    
    <nav v-if="authUser" class="navbar navbar-dark bg-info fixed-bottom">
      <v-layout class="center">
      <ul class="navbar-nav nav-justified h-25 w-100">
          <div>
            <span class="name user" style="">Hai...{{authUser.email}}</span>
          </div>
      </ul>
      </v-layout>
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
