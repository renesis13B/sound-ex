import Cookie, { CookieSetOptions } from 'universal-cookie'
import { getTokenFromSpotify } from './spotifyInteractor'
import moment from 'moment'

const cookie = new Cookie()
// SpotifyAccessTokenが1時間で使えなくなるためCookieのexpiresを1時間とする
const options = {
  path: '/',
  expires: moment(moment().format()).add(30, 'minutes').toDate(),
}
const setAuthToken = async (options: CookieSetOptions) => {
  try {
    const token = await getTokenFromSpotify()
    cookie.set('access_token', token, options)
    return cookie.get('access_token')
  } catch (error) {
    return error.message
  }
}

const authInteractor = {
  // クライアント側でcookieからtokenを取得する時に使用
  getTokenFromCookie() {
    return cookie.get('access_token') || setAuthToken(options)
  },
}

export default authInteractor