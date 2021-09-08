import axios from 'axios'
import { getToken } from './auth/auth'

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SPOTIFY_END_POINT_URL,
  })
  axiosInstance.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${getToken()}`
    return request
  })
  axiosInstance.interceptors.response.use(
    response => response,
    error => error,
  )
  return axiosInstance
}
export const baseAxios = createAxiosInstance()