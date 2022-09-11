// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    /* authDomain: "nuxt3-firebase9-vue3.firebaseapp.com",
    projectId: "nuxt3-firebase9-vue3",
    storageBucket: "nuxt3-firebase9-vue3.appspot.com",
    messagingSenderId: "906937360604",
    appId: "1:906937360604:web:73407e4f7bf758fc399419" */
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //console.log(app);
});
