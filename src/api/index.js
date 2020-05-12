// axios封装；
import axios from 'axios';
import qs from 'qs';

function http(url = "", param = {}, method = "") {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      url: url,
      data: qs.toString(param)
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        resolve(res.data); //返回成功的数据
      } else {
        reject(res.data); //返回失败的数据
      }
    })
  })
}

function post(url='',param={}){
  let method="POST";
  return http(url,param,method);
}
function get(url=''){
  let method="GET";
  return http(url,method);
}
export default{http,post,get};
