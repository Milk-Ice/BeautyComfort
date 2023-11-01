import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config.js'
import NProgress from 'nprogress'

class MYrequest {
  constructor(baseURL, timeout) {
    //创建 Axios 实例。
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求拦截器
    this.instance.interceptors.request.use((config) => {
      NProgress.start()
      return config
    })

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        NProgress.done()
        return res.data
      },
      (err) => {
        console.error(err)
        return Promise.reject(err)
      }
    )
  }

  // 通用
  request(config) {
    return this.instance.request(config)
  }

  // GET
  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  //POST
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

const myRequestInstance = new MYrequest(BASE_URL, TIMEOUT)

export default myRequestInstance
