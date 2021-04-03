import React from 'react';
import dynamic from 'next/dynamic';
import { IpInfo } from '../../../model/IpInfo';
import Header from '../../organisms/Header';
import ResultCard from '../../organisms/ResultCard';
import styles from './styles.module.scss';

interface Props {
  ipInfo: Array<IpInfo>;
  setIpInfo: (ipInfo: IpInfo) => void
}

const HomeTemplate = ({ ipInfo, setIpInfo }: Props) => {
  const MapSection = dynamic(() => import('../../organisms/MapSection'), {
    ssr: false,
  });
  return (
    <>
      <Header setIpInfo={setIpInfo} />
      {ipInfo.length ? (
        <ResultCard
          classes={{ container: styles.ResultCard }}
          values={ipInfo[ipInfo.length - 1]}
        />
      ) : null}
      <MapSection locations={ipInfo.map((info) => ({ lat: info.lat, long: info.long }))} />
    </>
  );
};

export default HomeTemplate;
