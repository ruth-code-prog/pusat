// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

var config = {
  apiKey: "AIzaSyAnH5rjV7SwkOQRTZzLEpL0q_9ei3PDfvA",
  authDomain: "pusat-6ccee.firebaseapp.com",
  projectId: "pusat-6ccee",
  storageBucket: "pusat-6ccee.appspot.com",
  messagingSenderId: "195618043147",
  appId: "1:195618043147:web:9c7dcb2acd81a79287de0e"
};

firebase.initializeApp(config);

window.firebase=firebase;

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});


