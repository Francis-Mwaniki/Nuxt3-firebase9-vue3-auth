<template>
  <div>
    <button class="button" @click="signIn">sign In</button>
    <button class="button" @click="signOut">sign Out</button>
  </div>
</template>

<script setup>
const signIn = async () => {
  //signing existing user
  const email = "francismwaniki630@gmail.com";
  const password = 123456;
  const credential = await signInUser(email, password);
  console.log("user", credential);
};
const signOut = async () => {
  //signing out user
  const result = await signOutUser();
  console.log("sign Out:", result);
};
console.log("----App----");
onMounted(async () => {
  //creating new user
  /* const email = "francismwaniki630@gmail.com";
  const password = 123456;
  const credential = await createUser(email, password);
  console.log(`User Credentials:${credential}`); */
});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
