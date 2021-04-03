import React from 'react';
import Head from 'next/head';
import HomeTemplate from '../components/Templates/HomeTemplate';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ip Address Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeTemplate />
    </div>
  );
}
