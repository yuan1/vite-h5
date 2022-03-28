<template>
  <h1>Hello Home!</h1>
  <ShowMore :show-height="100">
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
    <p>1111111111111111</p>
  </ShowMore>
  <van-button type="primary" @click="openLink">跳转Login</van-button>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ShowMore from '@/components/ShowMore.vue';
  const router = useRouter();
  const msg = 'home';
  console.log(msg);

  const openLink = () => {
    router.push('/login');
  };
</script>

<style></style>
