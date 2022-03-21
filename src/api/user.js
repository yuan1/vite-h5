/**
 * user模块接口列表
 * @author lyh
 * @date 2021-03-21
 */

import axios from '@/utils/request'
const user = {
  // 登录
  login(data) {
    return axios.post(`/xxx`, data)
  }
}
export default user
