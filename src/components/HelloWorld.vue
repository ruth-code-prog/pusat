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
    <h5>Kebijakan Privasi wargaNet</h5>
    <h6> Nama: Eko Setiaji (Selaku Founder wargaNet</h6>
    <h6> Biodata dan profile: https://ekosetiaji.my.id </h6>
    <h4> Informasi Legal wargaNet </h4>
    <h6> Jika Anda tinggal di Wilayah Indonesia, Layanan disediakan untuk Anda oleh wargaNet ("wargaNet", "milik kami", "kami", atau "kita") berdasarkan Ketentuan Layanan dan Kebijakan Privasi.</h6>
    <h6> Kebijakan Privasi ("Kebijakan Privasi") kami membantu menjelaskan praktik data kami, termasuk informasi yang kami proses untuk menyediakan Layanan kami. </h6>
    <h6> Misalnya, Kebijakan Privasi kami membahas mengenai informasi apa yang kami kumpulkan dan bagaimana hal ini memengaruhi Anda. Kebijakan Privasi juga menjelaskan langkah-langkah yang kami ambil untuk melindungi privasi Anda, seperti mengembangkan Layanan kami agar pesan yang telah tersampaikan tidak disimpan oleh kami dan memberikan Anda kendali dengan siapa Anda berkomunikasi menggunakan Layanan kami.</h6>
    <h6> Kebijakan Privasi ini berlaku bagi semua Layanan kami kecuali ditentukan sebaliknya.</h6>
    <h6> Informasi yang Kami Kumpulkan
WhatsApp harus menerima atau mengumpulkan sebagian informasi untuk menjalankan, menyediakan, meningkatkan, memahami, menyesuaikan, mendukung, dan memasarkan Layanan kami, termasuk saat Anda memasang, mengakses, atau menggunakan Layanan kami.

Jenis informasi yang kami terima dan kumpulkan tergantung pada cara Anda menggunakan Layanan kami. Kami memerlukan informasi tertentu untuk memberikan Layanan kami, dan tanpa informasi tersebut, kami tidak dapat memberikan Layanan kepada Anda. Misalnya, Anda harus memverfikasi email yang Kami kirim saat mendaftar di wargaNet</h6>
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
