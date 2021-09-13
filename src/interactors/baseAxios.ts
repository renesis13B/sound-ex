import axios from 'axios'
import { getTokenForServer } from './auth/auth'

const tryReLogin = async () => {
  return new Promise((resolve) => {
    const newToken = getTokenForServer()
    resolve(newToken)
  })
}

const handleExpiredTokenRejectedInterceptor = async (error: any) => {
  const { response } = error
  const statusCode = response?.status

  if (statusCode === 401 && !error.config.isRetry) {
    const { config } = error
    return tryReLogin().then((newToken) => {
      const headers = {
        ...config.headers,
        'Authorization': `Bearer ${newToken}`,
      }
      return axios.request({ ...config, headers, isRetry: true })
    })
  }
  return Promise.reject(error)
}

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SPOTIFY_END_POINT_URL,
  })
  // TODO: tokenの処理を共通にしようとしたがいろいろと変わる可能性があるので保留とする
  // axiosInstance.interceptors.request.use(request => {
  //   request.headers['Authorization'] = `Bearer ${token}`
  //   return request
  // })
  axiosInstance.interceptors.response.use(
    response => response,
    handleExpiredTokenRejectedInterceptor,
  )
  return axiosInstance
}
export const baseAxios = createAxiosInstance()