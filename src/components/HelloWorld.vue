<template>
  <div  class="hello">
    <div class="container">
      <button class="rounded" @click="logout">Logout</button>
      <h3>Movies to watch</h3>
      <div class="row">
        <div class=" col-md-6 col-md-offset-3">
            <input type="text" v-model='movie' class="form-control"  @keyup.enter='addMovie'>
            <ul>
              <li v-for="(movieName,key) in movies" :key='key'>
                <h3>{{movieName.name}}</h3>
                <button class="btn btn-xs btn-primary">Edit</button>
                <button class="btn btn-xs btn-warning" @click='deleteMovie(key)'>Delete</button>
                <br><br>
                <input type="text" v-model="editForm[key]" class="form-control" @keyup.enter='editMovie(key)'>
              </li>
            </ul>
        </div>
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
      editForm:[]
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
 margin-top: 110px;
}
</style>