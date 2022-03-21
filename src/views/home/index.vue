<template>
  <h1>Hello Home!</h1>
  <van-button type="primary" @click="openLink">跳转Login</van-button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const msg = "home";
console.log(msg);

const openLink = () => {
  router.push('/login')

}

</script>


<style></style>
