import { useState } from 'react';

export const useApi = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const refreshToken = async () => {
    const refresh = localStorage.getItem('refresh_token');
    const res = await fetch('/api/auth/token/refresh/', {
      method: 'POST',
      body: JSON.stringify({ refresh }),
    });
    const data = await res.json();
    if (data.access) {
      setToken(data.access);
      localStorage.setItem('token', data.access);
    }
  };

  const fetchWithAuth = async (url: string, options = {}) => {
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          Authorization: `Bearer ${token}`,
          ...options,
        },
      });
      if (res.status === 401) {
        await refreshToken();
        return fetchWithAuth(url, options);
      }
      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    get: (url: string) => fetchWithAuth(url),
    post: (url: string, data: any) =>
      fetchWithAuth(url, { method: 'POST', body: JSON.stringify(data) }),
  };
};
