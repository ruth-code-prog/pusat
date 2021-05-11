<template>
    <div class="row">
        <h2>Masuk</h2>
        
         <v-layout align-center justify-center row wrap>

            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signIn">Masuk</button>
         </v-layout>
        <hr>
        <v-layout class="center">
        <img src="./../assets/indo.jpg" style="height: 160px;" class="rounded float-left" alt="">
        </v-layout>
    </div>
</template>

<script>

    export default {
        name: 'SignIn',
        data () {
            return {
                formData:{
                    email:'',
                    password:''
                }
            }
        },
         methods: {
            signIn(){
                firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
                    .then((user)=>{
                      this.$router.replace('/hello')

                    })
                    .catch((e)=>{
                        alert(e.message)
                    })
            },
          },
       }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
        margin-top: 150px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
