const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

const apiAuthPost = async <T>(endpoint: string, body: T) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw { status: response.status, message: data.message || 'An error occurred' };
    }

    return {
      status: response.status,
      data
    };
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw { status: 0, message: 'There was a problem with our connection. Please try again later.' };
    }

    throw error;
  }
};

export { 
  apiAuthPost
}
