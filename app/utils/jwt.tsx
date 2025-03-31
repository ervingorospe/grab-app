import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const getEmailFromToken = async () => {
  const token = Cookies.get('token-auth')

  if (token) {
    try {
      const decoded = jwtDecode<{ sub: string }>(token) // Assuming email is in `sub`
      return decoded.sub
    } catch (error) {
      return ''
    }
  }

  return ''
}

export { getEmailFromToken }
