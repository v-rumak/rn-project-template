//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { APIResponse } from '@Types/Axios';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '@env';
import { useEffect, useState } from 'react';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (value: AxiosRequestConfig) => {
    value.url = `${value?.baseURL}${value?.url}`;

    //@todo Uncomment this when your need it

    /*    const headersValues: [
      string,
      string | null
    ][] = await AsyncStorage.multiGet(['accessToken', 'email', 'subToken']);*/
    value.headers = {
      ...value.headers,
      //Authentication: headersValues[0][1],
      //'X-User-Email': headersValues[1][1],
      //'X-Subscription-Token': headersValues[2][1],
    };
    return value;
  },
  (error) => {
    console.log('[Axios] Error:', error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      //@todo do logOut or something
    }
    throw new Error(
      `[STATUS]: ${err.response?.status} [METHOD]: ${err.config.method} [URL]: ${err.config.url}`
    );
  }
);

async function get<T>(path: string): Promise<T> {
  const { data } = await axiosInstance.get(path);
  return data;
}

const useGet = <TRes>(path: string) => {
  const [data, setData] = useState<TRes>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await get<TRes>(path);

      setLoading(false);
      setData(result);
    };

    getData();
  }, [path]);

  return { data, loading };
};

export { useGet };
