import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import HomeTemplate from '../components/Templates/HomeTemplate';
import { IpInfo } from '../model/IpInfo';
import { getIpInfoProxyRequest, getIpNumber } from '../service/ipify';
import { mapResponseTOIpInfo } from '../service/ipify/mapper';

export default function Home() {
  const [ipInfos, setIpInfo] = useState<Array<IpInfo>>([]);

  useEffect(() => {
    fetchUserIpInfo();
  }, []);

  const fetchUserIpInfo = async () => {
    try {
      const userIp = await getIpNumber();
      const response = await getIpInfoProxyRequest({
        ipAddress: userIp.data,
      });
      addIpInfo(mapResponseTOIpInfo(response.data));
    } catch (err) {
      console.log('Not implemented yet');
    }
  };

  const addIpInfo = (info: IpInfo) => {
    setIpInfo([...ipInfos, info]);
  };

  return (
    <div>
      <Head>
        <title>Ip Address Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeTemplate
        ipInfo={ipInfos}
        setIpInfo={addIpInfo}
      />
    </div>
  );
}
