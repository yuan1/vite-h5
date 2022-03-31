<template>
  <h1>Hello Home!</h1>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        required
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

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
  <QuillEditor theme="snow" />
  <van-button type="primary" @click="openLink">跳转Login</van-button>
  <p v-if="intervalTime.day > 0">{{ intervalTime.day }}d</p>
  <p v-if="intervalTime.hour > 0">{{ intervalTime.hour }}h</p>
  <p v-if="intervalTime.minute > 0">{{ intervalTime.minute }}m</p>
  <p v-if="intervalTime.second > 0">{{ intervalTime.second }}s</p>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import ShowMore from '@/components/ShowMore.vue';
  import { ref } from 'vue';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';

  const getInterval = (start, end) => {
    // 两个日期对象，相差的毫秒数
    let interval = end - start;
    // 求 相差的天数/小时数/分钟数/秒数
    let day, hour, minute, second;

    // 两个日期对象，相差的秒数
    // interval = interval / 1000;
    interval /= 1000;

    day = Number.parseInt(interval / 60 / 60 / 24);
    hour = Number.parseInt((interval / 60 / 60) % 24);
    minute = Number.parseInt((interval / 60) % 60);
    second = Number.parseInt(interval % 60);

    return {
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    };
  };

  const intervalTime = getInterval(new Date(), new Date('2022-4-2 0:0:0'));

  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const onSubmit = (values) => {
    console.log('submit', values);
  };
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
      checkList.value.splice(index, 1);
    } else {
      checkList.value.push(s.key);
    }
    console.log(checkList.value);
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
