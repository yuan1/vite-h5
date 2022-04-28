<script setup>
  import Pdfh5 from 'pdfh5';
  import axios from 'axios';
  import { Toast } from 'vant';
  import { useRoute } from 'vue-router';

  const url = useRoute().query.url;

  Toast.loading({
    duration: 0,
    forbidClick: true,
    message: '加载中...',
  });
  let pdfh5;
  axios
    .get(url, {
      responseType: 'arraybuffer',
    })
    .then((res) => {
      pdfh5 = new Pdfh5('#pdf', {
        data: res.data,
      });
      //监听完成事件
      pdfh5.on('complete', (status, msg, time) => {
        console.log(
          '状态：' + status + '，信息：' + msg + '，耗时：' + time + '毫秒'
        );
        Toast.clear();
      });
      pdfh5.on('error', () => {
        Toast.clear();
        Toast.fail('加载失败，请刷新重试');
      });
    })
    .catch((err) => {
      console.error(err);
      Toast.clear();
      Toast.fail('加载失败，请刷新重试');
    });
</script>

<template>
  <div id="pdf"></div>
</template>

<style>
  @import 'pdfh5/css/pdfh5.css';
  #pdf {
    width: 100%;
    height: 100%;
  }
</style>
