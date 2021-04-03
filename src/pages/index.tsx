import React, { useState } from 'react';
import Head from 'next/head';
import HomeTemplate from '../components/Templates/HomeTemplate';
import { IpInfo } from '../model/IpInfo';

export default function Home() {
  const [ipInfo, setIpInfo] = useState<IpInfo>({
    ipAddress: '',
    isp: '',
    location: '',
    timezone: '',
  });
  return (
    <div>
      <Head>
        <title>Ip Address Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeTemplate
        ipInfo={ipInfo}
        setIpInfo={setIpInfo}
      />
    </div>
  );
}
