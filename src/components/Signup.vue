<template>
    <div class="row">
        <h2>Daftar</h2>

         <v-layout align-center justify-center row wrap>

            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signUp">Daftar</button>
         </v-layout>

    </div>
</template>
<script>

    export default {
        name: 'Signup',
        data () {
            return {
                formData:{
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            signUp(){
                firebase.auth().createUserWithEmailAndPassword(this.formData.email,this.formData.password)
                .then((user)=>{
                    this.$router.replace('/hello')
                })
                .catch((e)=>{
                alert('oops'+e.message);
                })
            }
        },

        created(){

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
        margin-top: 120px;
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
