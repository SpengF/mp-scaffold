//axios设置
import baseURL from '../api/baseURL'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = baseURL.baseURL
axios.interceptors.request.use(
  config => {
    //此处做请求前配置
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  res => {
    //相应做统一拦截
    return res
  },
  err => {
    return Promise.reject(err);
  }
)
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}