<template>
  <div>
    <button class="button" @click="signIn">sign In</button>
    <button class="button" @click="signOut">sign Out</button>
    <pre>
      {{ credential }}
    </pre>
  </div>
</template>

<script setup>
const credential = ref();
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
