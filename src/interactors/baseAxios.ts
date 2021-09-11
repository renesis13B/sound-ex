import axios from 'axios'

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
    (error) => {
      error.message = error.response.status === 401
        ? '認証に失敗しました。更新ボタンを押していただくか再度時間がたってからお試しください。'
        : 'データの取得に失敗しました。再度時間をおくか別のキーワードをお試しください。'
      throw error
    },
  )
  return axiosInstance
}
export const baseAxios = createAxiosInstance()