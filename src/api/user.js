/**
 * user模块接口列表
 * @author lyh
 * @date 2021-03-21
 */

import axios from '@/utils/request';
const user = {
  // 登录
  login(data) {
    return axios.post(`/xxx`, data);
  },
  check() {
    return new Promise((resolve, reject) => {
      // 通过当前时间 的 最后一位 取一个随机数
      const time = new Date().getTime() + '';
      const random = time.substring(time.length - 1);
      console.log('check time is ', time, random);
      
      setTimeout(() => {
        // 小于5 返回 失败 不跳转
        if (Number(random) < 5) {
          reject('fail');
          // 小于8 返回 登录 跳转到登录页面
        } else if (Number(random) < 8) {
          resolve('login');
          // 其他情况 返回成功 正常跳转
        } else {
          resolve('success');
        }
      }, 5000);
    });
  },
};
export default user;
