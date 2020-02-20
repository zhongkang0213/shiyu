import originAxios from 'axios'
import {baseUrl, ERR_OK} from 'service/config'
import { message } from 'antd';
message.config({
    maxCount: 1,
    top: 200
});
// originAxios.defaults.withCredentials = true

export default function axios (url = '/', method = 'get', data, headers = {headers: {'Content-Type': 'application/json'}}) {
  if (method === 'get') {
    let requestUrl = baseUrl + url + (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
      originAxios.get(requestUrl, headers)
        .then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            message.error('请求错误，请联系管理员')
            reject(response)
          }
        })
        .catch((error) => {
          message.error('请求错误，请联系管理员')
          reject(error)
        })
    })
  } else if (method === 'post') {
    return new Promise((resolve, reject) => {
      originAxios.post(baseUrl + url, data, headers)
        .then((response) => {
          if (response.status === 200) {
            resolve(response)
          } else {
            message.error('请求错误，请联系管理员')
            reject(response)
          }
        })
        .catch((error) => {
          message.error('请求错误，请联系管理员')
          reject(error)
        })
    })
  }
}

export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
