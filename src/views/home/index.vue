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

  <div class="check-list">
    <p
      v-for="s in showList"
      :key="s"
      :class="checkList.includes(s.key) ? 'active' : ''"
      @click="handleCheck(s)"
      >{{ s.key }}:{{ s.value }}</p
    >
  </div>

  <van-button type="primary" @click="openLink">跳转Login</van-button>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ShowMore from '@/components/ShowMore.vue';
  import { ref } from 'vue';
  const router = useRouter();

  const showList = [
    { key: 'A', value: '1111' },
    { key: 'B', value: '2222' },
    { key: 'C', value: '3333' },
    { key: 'D', value: '4444' },
  ];
  const checkList = ref([]);

  const handleCheck = (s) => {
    const index = checkList.value.indexOf(s.key);
    if (index > -1) {
      checkList.value.splice(index,1);
    } else {
      checkList.value.push(s.key);
    }
    console.log(checkList.value)
  };

  const openLink = () => {
    router.push('/login');
  };
</script>

<style lang="scss" scoped>
  .check-list {
    p {
      cursor: pointer;
      &.active {
        color: red;
      }
    }
  }
</style>
