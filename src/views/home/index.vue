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
  <br />
  <van-button type="primary" round block to="/login">跳转Login</van-button>
  <br />
  <van-button type="primary" round block to="/detail">跳转Detail</van-button>
  <br />
  <van-button type="primary" round block to="/pdf?url=https://www.gjtool.cn/pdfh5/git.pdf">跳转Pdf</van-button>

  <p v-if="getInterval('2022/04/25') > 0"
    >{{ getInterval('2022/04/25') }}->d1</p
  >
  <template v-else>
    <p v-if="getInterval('2022/08/31') > 0"
      >{{ getInterval('2022/08/31') }}->d2</p
    >
    <p v-if="getInterval('2022/08/15') > 0"
      >{{ getInterval('2022/08/15') }}->d3</p
    >
  </template>

</template>

<script setup>
  import ShowMore from '@/components/ShowMore.vue';
  import { ref } from 'vue';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  

  const getInterval = (end) => {
    let interval = new Date(end) - new Date();
    interval /= 1000;
    return Math.floor(interval / 60 / 60 / 24) + 1;
  };

  const isDuringDate = (beginDateStr, endDateStr) => {
    // test
    // const curDate = new Date("2022/04/25 01:00:00");
    const curDate = new Date();
    const beginDate = new Date(beginDateStr);
    const endDate = new Date(endDateStr);
    if (curDate >= beginDate && curDate <= endDate) {
      return true;
    }
    return false;
  };
  const list = [
    {
      date: '2022.04.15',
      title: '启动会',
      active: isDuringDate('2022/04/15 00:00:00', '2022/04/24 23:59:59'),
    },
    {
      date: '04.25～08.31',
      title: '线上培训与知识竞答',
      active: isDuringDate('2022/04/25 00:00:00', '2022/08/31 23:59:59'),
    },
    {
      date: '04.25～08.15',
      title: '案例论文征集',
      active: isDuringDate('2022/04/25 00:00:00', '2022/08/15 23:59:59'),
    },
    {
      date: '08.16～08.31',
      title: '案例论文网络投票',
      active: isDuringDate('2022/08/16 00:00:00', '2022/08/31 23:59:59'),
    },
    {
      date: '09月',
      title: '活动结果公示',
      active: isDuringDate('2022/09/01 00:00:00', '2022/12/31 23:59:59'),
    },
  ];
  console.log(list);

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
