import axios from 'axios';
import { GetIpInfoReqParams, IpifyIPResponseDTO } from './interface';

export const getIpInfo = (params: GetIpInfoReqParams) => {
  const { domain, ipAddress } = params;
  const apiKey = process.env.IPIFY_KEY;
  return axios.get<IpifyIPResponseDTO>(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`, {
    params: {
      domain,
      ipAddress,
    },
  });
};

export const getIpNumber = () => axios.get<string>('https://api.ipify.org');

export const getIpInfoProxyRequest = (params: GetIpInfoReqParams) => axios.get<IpifyIPResponseDTO>('/api/ipify', {
  params: {
    domain: params.domain,
    ipAddress: params.ipAddress,
  },
});
