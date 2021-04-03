import axios from 'axios';
import { IpifyIPResponseDTO } from './interface';

export const getIpInfo = () => {
  console.log(process.env.NODE_ENV);
  const apiKey = process.env.IPIFY_KEY;
  return axios.get<IpifyIPResponseDTO>(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`);
};

export const getIpInfoProxyRequest = () => axios.get<IpifyIPResponseDTO>('/api/ipify');
