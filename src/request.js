import axios from "axios"

const request = axios.create({
  baseURL:'http://3.141.23.218:5000',
})

const login_token = "INTERVIEW_SIMPLY2021"

// 请求拦截
request.interceptors.request.use(
  config => {
    config.data.login_token = login_token
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export default request