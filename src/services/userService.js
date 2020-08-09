import axios from 'axios'

function delay(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, duration);
  })
}

export async function login(loginInfo) {
  // post http://study.yuanjin.tech/api/user/login
  await delay(2000) // 延迟函数 为了看效果
  const res = await axios.post('/api/user/login', loginInfo)
  const token = res.headers.authorization;
  if (token) {
    localStorage.setItem("newsToken", token)
  }
  // console.log(token);
  return res.data;
}

// 使用保存的令牌从服务器换取信息
export async function whoAmI() {
  // get http://study.yuanjin.tech/api/user/whoami
  // authorization: bearer token
  await delay(2000) // 延迟函数 为了看效果
  const token = localStorage.getItem('newsToken');
  if (!token) return null;
  const res = await axios.get('/api/user/whoami', {
    headers: {
      authorization: `bearer ${token}`
    }
  })
  // console.log(res);
  return res.data
}
// 注销 退出登录
export function loginOut() {
  localStorage.removeItem('newsToken')
}

// 注册
export async function reg(userInfo) {
  // post http://study.yuanjin.tech/api/user/reg
  let res = await axios.post('/api/user/reg', userInfo);
  return res.data;
}