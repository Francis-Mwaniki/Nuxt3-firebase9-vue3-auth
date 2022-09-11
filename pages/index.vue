<template>
  <div>
    <button class="button" @click="signIn" v-if="!firebaseUser">sign In</button>
    <button class="button" @click="signOut" v-if="firebaseUser">
      sign Out
    </button>
    <div v-if="firebaseUser">
      <pre>
        {{ firebaseUser }}
      </pre>
    </div>
    <div v-else>
      <h2>User is'nt signed in</h2>
    </div>
  </div>
</template>

<script setup>
import { signInUser } from "~~/composables/useFirebase";
import { signOutUser } from "~~/composables/useFirebase";
import { useFirebaseUser } from "@/composables/useState";
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
const credential = ref();
const firebaseUser = useFirebaseUser();
const signIn = async () => {
  //signing existing user
  const email = "francismwaniki630@gmail.com";
  const password = 123456;
  credential.value = await signInUser(email, password);
};
const signOut = async () => {
  //signing out user
  credential.value = await signOutUser();
};
console.log("----App----");
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
