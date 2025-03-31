import Cookies from 'js-cookie'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'

const apiAuthPost = async (endpoint: string, body: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    if (!response.ok) {
      throw { status: response.status, message: data.message || 'An error occurred' }
    }

    return {
      status: response.status,
      data
    }
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw {
        status: 0,
        message: 'There was a problem with our connection. Please try again later.'
      }
    }

    throw error
  }
}

const apiGetUserByEmail = async (endpoint: string, email: string) => {
  try {
    const token = Cookies.get('token-auth')
    const response = await fetch(`${API_BASE_URL}${endpoint}?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      }
    })

    const data = await response.json()

    if (!response.ok) {
      throw {
        status: response.status,
        message: data?.message || 'Something went wrong, please try again later.'
      }
    }

    return {
      status: response.status,
      data
    }
  } catch (error: any) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw {
        status: 0,
        message: 'There was a problem with our connection. Please try again later.'
      }
    }

    throw { status: error?.status || 500, message: 'Something went wrong, please try again later.' }
  }
}

const apiUserPut = async (endpoint: string, body: any) => {
  try {
    const token = Cookies.get('token-auth')

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    if (!response.ok) {
      throw { status: response.status, message: data.message || 'An error occurred' }
    }

    return {
      status: response.status,
      data
    }
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw {
        status: 0,
        message: 'There was a problem with our connection. Please try again later.'
      }
    }

    throw error
  }
}

export { apiAuthPost, apiGetUserByEmail, apiUserPut }
