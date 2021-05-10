<template>
    <div class="row">
        <h2>Signin</h2>
        
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signIn">Signin</button>
        </div>
        <hr>
        <v-layout class="center">
        <div class="row">
            <div class="btn-group">
                <button type="button" class="btn btn-primary" @click="signInWithFacebook">Facebook</button>
                <button type="button" class="btn btn-default" @click="signInWithGoogle">Google</button>
                <button type="button" class="btn btn-info">Twiter</button>
            </div>
        </div>
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
       signInWithGoogle(){
           let provider = new firebase.auth.GoogleAuthProvider();


           firebase.auth()
            .signInWithRedirect(provider)
            .then((result) => {

                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                this.$router.replace('/hello');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
       },
       signInWithFacebook(){
           var provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                this.$router.replace('/hello');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
       },
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
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
