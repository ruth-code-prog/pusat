<template>
  <div  class="hello">
    <div class="container">
      <button class="rounded" @click="logout">Logout</button>
      <h3>Info Terbaru di Indonesia</h3>
       <v-layout align-center justify-center row wrap>
          <youtube :video-id="videoId7" ref="youtube" @playing="playing" width="360px"></youtube>
       </v-layout>

      <div class="row">
          <h4>Komentar wargaNet untuk membangun Indonesia</h4>
            <input type="text" v-model='movie' class="form-control"  @keyup.enter='addMovie'>
             <v-layout align-center justify-center row wrap>
              <ul>
                <li v-for="(movieName,key) in movies" :key='key'>
                  <h6>{{movieName.name}}</h6>
                  <button class="btn btn-xs btn-primary">Edit</button>
                  <button class="btn btn-xs btn-warning" @click='deleteMovie(key)'>Delete</button>
                  <br><br>
                  <input type="text" v-model="editForm[key]" class="form-control" @keyup.enter='editMovie(key)'>
                </li>
              </ul>
            </v-layout>
      </div> 
    </div>
    <img src="./../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      movie: null,
      movies:{},
      editForm:[],
      videoId7: 'CHwVTzYl4nU',
    }
  },
  methods:{
    addMovie(){
      firebase.database().ref('movies').push({name:this.movie})
      .then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error)})
      ;
  },
   logout(){
    firebase.auth().signOut()
    .then(()=>{
      this.$router.replace('/sign-in');
    })
    .catch((e)=>{
      alert(e.message);
    })
  },
  editMovie(key){
    firebase.database().ref('movies/'+key).set({
      name:this.editForm[key]
    });
    this.editForm=[];
  },
  deleteMovie(key){
    firebase.database().ref('movies/'+key).remove();
  }
},
created(){
   firebase.database().ref('movies').on('value',(snapshot)=>{
     this.movies=snapshot.val();
   });
 },
 playVideo() {
      this.player.playVideo()
    },
    playing() {
     // console.log('\o/ we are watching!!!')
    },
   computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
 margin-top: 140px;
 padding-left: 0px;
}
</style>
